const fs = require('fs');
const path = require('path');

// make promise from our callback async functions
const read = () => {
    return new Promise((res, rej) => {
        fs.readFile('some path', someOptions, (err, content) => {
            if (err) rej(err)
            else res(content)
        })
    })
}

// get absolute path of our file
const absolutePath = path.join( path.dirname(process.main.filename) );

mongoseElement.populate('refId', 'fieldNamesStr to take on refed object').select('fieldNamesStr to take ON MAIN MONGOOSE object')
// insteadof refId, if it in not plane object refId = 'topLevelPropName.midleLevelPropName.propName.refId' 

userSchema.methods.addToCart = function() {
    this //will refs to user.
}

courseSchema.method('toClient', function() { // when we need to transform field name
    // if we use populate - pay attention to modify data in it too
    const course =  this.toObject();
    course.id = course._id;
    delete course._id;
    return course;
})

// keep sessions in DB:
// - not to allow hack for hackers
// - save some memory
// npm connect-mongodb-session give an opportunity to save sessions automatically to DB
// in session we pass only object, so we can not read method 'populate' of DB
// to solve this issue we can add middleware:
const wrapper = async function(req, _res, next) {
    if (!req.session.user) {
        return next()
    }

    req.user = await User.findById(req.session.user._id)
    // User is DB collection
    next()
}

// npm bcryptjs - для шифрования пароля.
// npm csurf - for session protection - and pass token in headers
// npm flash - give the possibility to add validation errors

// to send emails we need to connect to third party services
// one of services is SendGrid

// npm nodemailer
// npm nodemailer-sendgrid-transport

// good practice to send emails in background - not to await until the will be send

// reset password ЗАБЫЛИ ПАРОЛЬ ? START
// router.post('reset', (req, res) => {
//    try {
//      crypto.randomBytes(32, async(err, buffer) => {
//       if (err) {
//         req.flash('err', 'Чтото пошло не так');
//         return res.redirect('/auth/reset')
//       }
//       const token = buffer.toString('hex');
//       const candidate = await User.findOne({ email: req.body.email });
//       if (candidate) {
//         candidate.resetToken = token;
//         candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
// на проекте использовали отдельную таблицу для токенов.
//         await candidate.save()
//         await transporter.sendEmail(resetEmail(candidate.email, token))
//         res.redirect('/auth/login')
//       } else {
//         req.flash('err', 'Чтото пошло не так')
//         return res.redirect('/auth/reset')
//       }
//     })
//    catch(error) {
//      console.log(error)
//    }
// })

// email with next link:
// <a href=`${BASE_URL + '/auth/password/' + token}`>Восстановить доступ</a>

// reset password ЗАБЫЛИ ПАРОЛЬ ? END

// reset password ПОСЛЕ ПЕРЕХОДА ПО ССЫЛКЕ ПИСЬМА START
// router.get('/password/:token', (req, res) => {
//     if (!req.params.token) {
//         return res.redirect('/auth/login')
//     }
// 
//     try {
//         const user = await User.findOne({
//             resetToken: req.params.token,
//             resetTokenExp: {$gt: Date.now()}
//         });
// 
//         if (!user) {
//             return res.redirect('/auth/login')
//         } else {
//             res.render('auth/password', {
//                 title: 'Some title',
//                 error: req.flash('error'),
//                 userId: user._id.toString(),
//                 token: req.params.token
//             })
//         }
// 
//     }
// })
// reset password ПОСЛЕ ПЕРЕХОДА ПО ССЫЛКЕ ПИСЬМА END


// reset password ОТПРАВКА НОВОГО ПАРОЛЯ START
// csrf detects automatically by library
// router.post('/password', async(req, res) => {
//     try {
//         const user = await User.findOne({
//             _id: req.body.userId,
//             resetToken: req.body.token,
//             resetTokenExp: {$gt: Date.now()}
//         })
// 
//         if (user) {
//             user.password = awair bcrypt.hash(req.body.password, 10);
//             delete user.resetToken;
//             delete user.resetTokenExp;
//             await user.save()
//         } else {
//             req.flash('error', 'Время жизни токена истекло');
//             res.redirect('/auth/login');
//         }
//     }
// })
// reset password ОТПРАВКА НОВОГО ПАРОЛЯ END


// npm express-validator - works as middlware
// also there are sinitizers in that function, they are allow to normilize values before send them to DB

// разделить ключи на keys.dev и keys.prod в индекс файле по условию на process.env.NODE_ENV определять откуда их брать

// npm hemlet - to protect express application with set special http headers

// npm compression - сжимает файлы.

// RESTapi - get, post, put, delete



// Worker Thread
// все файловые операции fs.*
// dns.lookup
// pipes (some cases)
// CPU intense tasks



// system async calls on core level
// TCP/ UDP client server
// pipes
// DNS resolve
// Child process





