

//指定图表的配置项和数据
var samedayYield = {
    color: ['#5793f3', '#d14a61', '#675bba'],
    title : {
        text: '当日产量图',
        x: 'center',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
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
            name:'时间',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'产量'
        }
    ],
    series : [
        {
            name:'当日产量',
            type:'bar',
            data:[2000, 4900, 7000, 3200, 5600,6700, 5600, 1200, 2600, 2000, 6400, 3300],
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

var samedayConsume = {
    color: ['#5793f3', '#d14a61', '#675bba'],
    title : {
        text: '当日能耗图',
        x: 'center',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
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
            name:'时间',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'能耗'
        }
    ],
    series : [
        {
            name:'当日能耗',
            type:'bar',
            data:[2000, 4900, 7000, 3200, 5600,6700, 5600, 1200, 2600, 2000, 6400, 3300],
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
}

var samemonthYieid = {
    color: ['#5793f3', '#d14a61', '#675bba'],
    title : {
        text: '当月产量图',
        x: 'center',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
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
            name:'时间',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'能耗'
        }
    ],
    series : [
        {
            name:'当月产量',
            type:'bar',
            data:[2000, 4900, 7000, 3200, 5600,6700, 5600, 1200, 2600, 2000, 6400, 3300],
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
}

var samemonthConsume = {
    color: ['#5793f3', '#d14a61', '#675bba'],
    title : {
        text: '当月能耗图',
        x: 'center',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
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
            name:'时间',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'能耗'
        }
    ],
    series : [
        {
            name:'当月能耗',
            type:'bar',
            data:[2000, 4900, 7000, 3200, 5600,6700, 5600, 1200, 2600, 2000, 6400, 3300],
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
}
var myChart1 = echarts.init(document.getElementById('sameday_yield'));
myChart1.setOption(samedayYield);

var myChart2 = echarts.init(document.getElementById('sameday_consume'));
myChart2.setOption(samedayConsume);

var myChart = echarts.init(document.getElementById('samemonth_yieid'));
myChart.setOption(samemonthYieid);

var myChart = echarts.init(document.getElementById('samemonth_consume'));
myChart.setOption(samemonthConsume);

