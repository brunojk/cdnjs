(function () {
    var lang = {
            months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort : "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
            longDateFormat : {
                L : "YYYY-MM-DD",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY HH:mm",
                LLLL : "dddd D MMMM YYYY HH:mm"
            },
            meridiem : {
                AM : 'AM',
                am : 'am',
                PM : 'PM',
                pm : 'pm'
            },
            relativeTime : {
                future : "om %s",
                past : "for %s siden",
                s : "noen sekunder",
                m : "ett minutt",
                mm : "%d minutter",
                h : "en time",
                hh : "%d timer",
                d : "en dag",
                dd : "%d dager",
                M : "en måned",
                MM : "%d måneder",
                y : "ett år",
                yy : "%d år"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('nb', lang);
    }
}());
