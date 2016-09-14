

//指定图表的配置项和数据
var option = {
    title : {
        // text: '某地区蒸发量和降水量',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },

    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            name:'传动编号',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数值'
        }
    ],
    series : [
        {
            name:'传动',
            type:'bar',
            data:[20, 49, 70, 32, 56,67, 56, 12, 26, 20, 64, 33],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
    ]
};

$(function () {
    var orotateInfo = $('#rotate_info');
    var orotateEchart = $('#rotate_echart');
    var flag = true;
       $("#rotateswtch").on('click',function () {
        if(flag){
            orotateInfo.css({'display':'none'});
            orotateEchart.css({'display':'block'});
            var myChart = echarts.init(document.getElementById('rotate_echart'));
            myChart.setOption(option);
            flag = false;
        }else{
            orotateInfo.css({'display':'block'});
            orotateEchart.css({'display':'none'});
            flag = true;
        }
   }); 
})