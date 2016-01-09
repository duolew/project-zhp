/**
 * Created by zhangpeng on 2015/12/16.
 */
function JSClass() {
    this.m_Text = 'division element';
    this.m_Element = document.createElement('div');
    this.m_Element.innerHTML = this.m_Text;
    this.m_Element.addEventListener('click', this.func);
    // this.m_Element.onclick = this.func;
}
JSClass.prototype.Render = function() {
    var div =  document.createElement('div');

    document.body.appendChild(div);
}
var div =  document.createElement('div');

document.body.appendChild(div);
JSClass.prototype.func = function() {
    alert(this.m_Text);
};

var jc = new JSClass();
jc.Render();  // add div
jc.func();  // 输出 division element






