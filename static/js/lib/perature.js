

//指定图表的配置项和数据
var option = {
    title: {
        // text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['上层温控表','下层温控表']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        name: '温控表编号',
        data: ['K2','K3','K4','K5','K6','K7','K8']
    },
    yAxis: {
        type: 'value',
        name: 'PV值'
    },

    series: [
        {
            name:'上层温控表',
            type:'line',
            // stack: '总量',
            data:[120, 220, 290, 330, 90, 230, 210,1400]
        },
        {
            name:'下层温控表',
            type:'line',
            // stack: '总量',
            data:[120, 182, 191, 234, 290, 330, 310,1399]
        }
    ]
};

$(function () {
    var operatureInfo = $('#perature_info');
    var oechartBox = $('#echart_box');
    var flag = true;
       $("#btnSwitch").on('click',function () {
        if(flag){
            operatureInfo.css({'display':'none'});
            oechartBox.css({'display':'block'});
            var myChart = echarts.init(document.getElementById('echart_box'));
            myChart.setOption(option);
            flag = false;
        }else{
            operatureInfo.css({'display':'block'});
            oechartBox.css({'display':'none'});
            flag = true;
        }
   }); 
})