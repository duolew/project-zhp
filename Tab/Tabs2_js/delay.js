/**
 * Created by SZ on 2015/4/1.
 */
window.onload=function(){
    var tabstop=document.getElementById("tabs_top");
    var tabli=tabstop.getElementsByTagName("li");
    var content=document.getElementById("content");
    var condiv=content.getElementsByTagName("div");
    var timer=null;  //����ʱ�����ø���������ʼ��ʼֵ�ǿ�
    //console.log(tabli)
    for(i=0;i<tabli.length;i++){
        //����һ������������һ���հ�������������������ʱ�򣬺�����ʹ�õ�i��ʵ���Ѿ�ѭ����ϵ�i��Ҳ����i���Ͻ�
        //���������index��ʵҲ������id�����������󣬲鿴html��ʱ����Կ������е�li�¶������������id��
        tabli[i].id=i;
        //console.log(i)   ������Կ�����һ������0��4
        //�ȶ�������е�classname
        tabli[i].onmouseover=function(){
            //�������ʱ��
            clearTimeout(timer);
            var that = this;//����һ����˵��
            var timer=setTimeout(function(){  //��ʵsetTimeoutǰ��ʡ�Ե���һ��window�ģ������±�thisָ���Ҳ��window��ȴ�Ҳ���this������ߵ�this�Ҳ�������Ļ����������������������һ��this����������that
                for (j = 0; j < tabli.length; j++) {
                    tabli[j].className = "";
                    condiv[j].className = "tabs_content"
                }
                //�����ٸ���굱ǰֵ���classname
                tabli[that.id].className = "select";//�����tabli[that.id]д��thatҲ��
                //�±����������һ�²�������֤һ��this.id,console.log(this.id),�������undefind����ȡ����ֵ�ģ����Բ�����this����idȡ���������õ���this�ò���������ָ��window��
                condiv[that.id].className = "tabs_content_show";
                //�ϱ��Ǹ�index�������id�Ļ� �͸��������
            },2000)
        }

    }

}