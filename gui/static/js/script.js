setTimeout(function() { 
        $('#sistema_menu').show()
        $('.loading').hide()
        $('.finances').show()
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