setTimeout(function() { 
        $('#sistema_menu').show()
        $('.loading').hide()
        $('.finances').show()
        $('.fundo-main').show()
        $('.footer-creditos').show()
        $('.local-main').show()
    }, 2000
);




function devendo(){
    $('.clientes_devendo').hide()
    $('.pago').hide()
    $('.devendo').show()
    $('.vip').hide()
    $('.gasto').hide()
    $('.investimentos').hide()

}

function pago(){
    $('.clientes_devendo').hide()
    $('.pago').show()
    $('.devendo').hide()
    $('.vip').hide()
    $('.gasto').hide()
    $('.investimentos').hide()
}

function vip(){
    $('.clientes_devendo').hide()
    $('.pago').hide()
    $('.devendo').hide()
    $('.gasto').hide()
    $('.investimentos').hide()
    $('.vip').show()
}

function gastos(){
    $('.clientes_devendo').hide()
    $('.pago').hide()
    $('.devendo').hide()
    $('.vip').hide()
    $('.gasto').show()
    $('.investimentos').hide()
}

function investimentos(){
    $('.clientes_devendo').hide()
    $('.pago').hide()
    $('.devendo').hide()
    $('.vip').hide()
    $('.gasto').hide()
    $('.investimentos').show()
}

function clientes_devendo(){
    $('.pago').hide()
    $('.devendo').hide()
    $('.vip').hide()
    $('.gasto').hide()
    $('.investimentos').hide()
    $('.clientes_devendo').show()
}


$('.card-body').hover(function(){
    $('.box_mostruario_de_devendo').show()
},function(){
    $('.box_mostruario_de_devendo').hide()
});


$('.box_mostruario_de_devendo').hover(function(){
    $('.box_mostruario_de_devendo').show()
}, function(){
    $('.box_mostruario_de_devendo').hide()
});


$('.money').hover(function(){
    $('.resultado_das_ultimas_transacoes').show()
},function(){
    $('.resultado_das_ultimas_transacoes').hide()
});

$('.resultado_das_ultimas_transacoes').hover(function(){
    $('.resultado_das_ultimas_transacoes').show()
},function(){
    $('.resultado_das_ultimas_transacoes').hide()
});