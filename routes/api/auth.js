const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = express.Router();
const secret = require('../../setup/myKey').keys.Secret;
const User = require('../../models/User');

//@Route    POST
//ACCESS    PUBLIC
//DESC      Route to register new user
router.post('/register', (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (user) res.json({ success: false, msg: 'Email already in use' });
            else {
                const newUser = new User({
                    first_name,
                    last_name,
                    email,
                    password: password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) res.json({ success: false, msg: 'passwordHashError - ' + err });
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => res.json({ success: true, msg: 'User Created' }))
                                .catch(err => {
                                    res.json({ success: false, msg: 'userCreateError - ' + err });
                                });
                        }
                    });
                });
            }
        })
        .catch(err => {
            res.success(404).json({ success: false, msg: 'findUserError - ' + err });
        });
});

//@Route    POST
//ACCESS    PUBLIC
//DESC      Route to login
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user) res.json({ success: false, msg: 'No entry available for this email' });
            else {
                bcrypt
                    .compare(password, user.password)
                    .then(matched => {
                        if (!matched) res.json({ success: false, msg: 'Password not matched' });
                        else {
                            const payload = {
                                id: user.id,
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email
                            };
                            jwt.sign(
                                payload,
                                secret,
                                {
                                    expiresIn: 3600
                                },
                                (err, token) => {
                                    err
                                        ? console.log(err)
                                        : res.json({ success: true, token: 'Bearer ' + token, payload: payload });
                                }
                            );
                        }
                    })
                    .catch(err => res.json({ success: false, msg: 'passwordCompareError - ' + err }));
            }
        })
        .catch(err => res.json({ success: false, msg: 'findUserError - ' + err }));
});

//@Route    POST
//ACCESS    PRIVATE
//DESC      Route to validateLogin
router.get('/auth', passport.authenticate('jwt', { session: false }), (req, res) => {
    const token = req.headers.authorization.replace('Bearer ', '').trim();
    const user = jwt.decode(token, secret);
    User.findById(user.id)
        .then(user => res.json({ success: true, msg: 'User Authenticated', user: user }))
        .catch(err => res.status(200).json({ success: false, msg: 'authenticateUserError - ' + err }));
});

module.exports = router;
