function onReady(item) {
    var intervalid = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== 'undefined') {
            window.clearInterval(intervalid)
            item.call(this);
        }
    }, 3000)
}
function setVisible(selector, bool) {
    document.querySelector(selector).style.display = bool ? 'block' : 'none';

}
onReady(() => {
    setVisible('.page', true)
    setVisible('#loading', false)
})