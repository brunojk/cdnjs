(function () {
    var lang = {
            months : "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),
            monthsShort : "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays : "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort : "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            meridiem : {
                AM : 'AM',
                am : 'am',
                PM : 'PM',
                pm : 'pm'
            },
            calendar : {
                sameDay : function () {
                    return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                nextDay : function () {
                    return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                nextWeek : function () {
                    return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                lastDay : function () {
                    return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
                },
                lastWeek : function () {
                    return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : '') + '] LT';
                },
                sameElse : 'L'
            },
            relativeTime : {
                future : "en %s",
                past : "fai %s",
                s : "uns segundo",
                m : "un minuto",
                mm : "%d minutos",
                h : "unha hora",
                hh : "%d horas",
                d : "un día",
                dd : "%d días",
                M : "un mes",
                MM : "%d meses",
                y : "un ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('gl', lang);
    }
}());
