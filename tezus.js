
    jQuery(document).ready(function($) {

        // http://jsfiddle.net/sWbfk/
        $("#dp-island").datepicker({
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            nextText: 'Proximo',
            prevText: 'Anterior',
            beforeShowDay: function (date) {
                var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
                var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
                var isHightlight = date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2));
                return [true, isHightlight ? "dp-highlight" : ""];
            },
            onSelect: function (dateText, inst) {
                var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#start-date").val());
                var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#end-date").val());
                var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
                if (!date1 || date2) {
                    $("#start-date").val(dateText);
                    $("#end-date").val("");
                } else if (selectedDate < date1) {
                    $("#end-date").val($("#start-date").val());
                    $("#start-date").val(dateText);
                } else {
                    $("#end-date").val(dateText);
                }
                $(this).datepicker();
            }



        });

$( "#search" ).click(function() {
    var cato = document.querySelector('#alim .sim');
    var perd = document.querySelector('#blo2 .sim');
  if ( $("#start-date").val() ) {
    var startDate = $("#start-date").val();
    if ( $("#end-date").val() ) {
      var endDate = $("#end-date").val();
    }else{
      var endDate = startDate;
    }
}

});
  });
