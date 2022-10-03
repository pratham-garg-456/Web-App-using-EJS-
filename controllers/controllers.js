
const home = (req, res) => {
    res.render('home.ejs')

}
const about = (req, res) => {
    res.render('about.ejs')
}
const info = (req, res) => {
    res.render('info.ejs')
}
const contactus = (req, res) => {
    res.render('contactUs.ejs')
}


module.exports = { home, about, contactus, info }