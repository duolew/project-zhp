/**
 * Created by SZ on 2015/4/1.
 */
window.onload=function(){
    var tabstop=document.getElementById("tabs_top");
    var tabli=tabstop.getElementsByTagName("li");
    var content=document.getElementById("content");
    var condiv=content.getElementsByTagName("div");
    //console.log(tabli)
    for(i=0;i<tabli.length;i++){
        //����һ������������һ���հ�������������������ʱ�򣬺�����ʹ�õ�i��ʵ���Ѿ�ѭ����ϵ�i��Ҳ����i���Ͻ�
        //���������index��ʵҲ������id�����������󣬲鿴html��ʱ����Կ������е�li�¶������������id��
        tabli[i].index=i;
        //console.log(i)   ������Կ�����һ������0��4
        //�ȶ�������е�classname
        tabli[i].onmouseover=function(){
            for(j=0;j<tabli.length;j++){
                tabli[j].className="";
                condiv[j].className="tabs_content"
            }
        //�����ٸ���굱ǰֵ���classname
        this.className="select";
        condiv[this.index].className="tabs_content_show";
            //�ϱ��Ǹ�index�������id�Ļ� �͸��������
        }

    }

}