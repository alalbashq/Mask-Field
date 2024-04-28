class ControlData extends frappe.ui.form.ControlData {
    make_input() {
        super.make_input();
        var me = this;
        var $tooltip = $(`<span id="tooltip-img"></span>`);
        this.$wrapper.find(".clearfix").append($tooltip)
        this.set_input_attributes();
        this.has_input = true;
        console.log(me)
        if (me.df.fieldtype === "Data" && me.df.options === ":Phone") {
            me.ValidPhone()
        }
        if (me.df.fieldtype === "Data" && me.df?.options  && me.df.options.startsWith(":mask")) {
            const parts = me.df.options.split(":");

            if (parts.length > 1) {
                const result = parts[1];
                me.ValidMask(parts[2])
                console.log(result); // or return result if you're inside a function
            } else {
                console.log(""); // or return an empty string if you're inside a function
            }

        }
        if (me.df.fieldtype === "Data" && me.df?.options && me.df?.options === ":Mobile") {
            me.ValidMobile()
        }
        if (me.df.fieldtype === "Data" && me.df?.options && me.df?.options === ":Hijri-Date") {
            me.hijri_date()
        }
    }
    ValidMask(mask) {
        var me = this;
        me.$wrapper.find("input").attr("data-mask", mask)
        me.$wrapper.find("input").attr("data-mask-visible", true)
        $(document).ready(function () {
            var maskElementList = $('[data-mask]');
            maskElementList.each(function () {
                var maskEl = $(this);
                maskEl.attr("data-mask-visible", "true");
                new IMask(maskEl[0], {
                    mask: maskEl.data('mask'),
                    lazy: maskEl.data('mask-visible') === 'true'
                });
            });
        });
    }
    ValidPhone() {
        var me = this;
        me.$wrapper.find("input").on("input", function () {
            var inputValue = $(this).val();
            $(this).attr("maxlength", 9);
            console.log(inputValue)
            var mobileNumber = /^(0)\d{7}$/;

            me.$wrapper.find(".validate-phone-box").removeClass("hide");
            // Remove any non-digit characters
            var numericValue = inputValue.replace(/\D/g, "");
            if (numericValue.length == 8 && numericValue.startsWith("0")) {

                me.$wrapper.find(".validate-phone-box").html(`<span style="color:green"><b>${__("الرقم الذي ادخلته صحيح")}</b></span>`)
                setTimeout(function () {
                    me.$wrapper.find(".validate-phone-box").addClass("hide");
                }, 2000)
            } else {
                $(this).val(numericValue)
                $(".btn-login").html();
                if (numericValue.startsWith("0")) {
                    me.$wrapper.find(".validate-phone-box").html(`<span style="color:red"><b>${__("الرجاء إدخال رقم مكون من 8 أرقام")}</b></span>`)
                }
                else {
                    me.$wrapper.find(".validate-phone-box").html(`<span style="color:red"><b>${__("يجب ان يبدأ الرقم بـ (0)")}</b></span>`)
                }
            }
            // Update the input value with the numeric value only 						

            $(this).val(numericValue)
        });
    }
    ValidMobile() {
        var me = this;
        me.$wrapper.find("input").on("input", function () {
            var inputValue = $(this).val();
            $(this).attr("maxlength", 9);
            console.log(inputValue)
            var mobileNumber = /^(77|78|71|73|70)\d{7}$/;

            me.$wrapper.find(".validate-phone-box").removeClass("hide");
            // Remove any non-digit characters
            var numericValue = inputValue.replace(/\D/g, "");
            if ((numericValue.length == 9) && (numericValue.startsWith("77") || numericValue.startsWith("78") || numericValue.startsWith("71") || numericValue.startsWith("73") || numericValue.startsWith("70"))) {

                me.$wrapper.find(".validate-phone-box").html(`<span style="color:green"><b>${__("الرقم الذي ادخلته صحيح")}</b></span>`)
                setTimeout(function () {
                    me.$wrapper.find(".validate-phone-box").addClass("hide");
                }, 2000)
            } else {
                $(this).val(numericValue)
                $(".btn-login").html();
                if (numericValue.startsWith("77") || numericValue.startsWith("78") || numericValue.startsWith("71") || numericValue.startsWith("73" || numericValue.startsWith("70"))) {
                    me.$wrapper.find(".validate-phone-box").html(`<span style="color:red"><b>${__("الرجاء إدخال رقم مكون من 9 أرقام")}</b></span>`)
                }
                else {
                    me.$wrapper.find(".validate-phone-box").html(`<span style="color:red"><b>${__("يجب ان يبدأ الرقم بـ (77 او 78 او 73 او 71 او 70)")}</b></span>`)
                }
            }
            // Update the input value with the numeric value only 						

            $(this).val(numericValue)
        });
    }
    hijri_date() {
        var me = this;
        $(".k-select").click()
        me.$wrapper.find("input").kendoDatePickerHijri({culture: "ar-SA"});
        me.$wrapper.on('focusin', function () {
            me.$wrapper.find('.k-select').click();
        });
    }
    set_doc_tooltip() {
        var me = this;
        if (frappe.get_route()[0] !== "List") {
            var tooltip = ""
            if (me.df.parent && frappe.boot?.tooltip[me.df.parent] && me.df.parent in frappe.boot?.tooltip) {
                if (me.df.fieldname && me.df.fieldname in frappe.boot.tooltip[me.df.parent]) {
                    tooltip = frappe.boot.tooltip[me.df.parent][me.df.fieldname]
                }
            }

            if (tooltip && tooltip !== undefined) {
                let $help = this.$wrapper.find('#tooltip-img');
                var tool = '';
                if (tooltip["type"] === "Popover") {
                    if (tooltip["popover_header"])
                        tool = `data-toggle="popover" data-container="body" data-html="true" title="${tooltip["popover_header"]}" data-placement="${tooltip["placement"]}" data-content='${tooltip["description"]}'`;
                    else
                        tool = `data-toggle="popover" data-container="body" data-html="true"  data-trigger="hover" data-content='${tooltip["description"]}'`;
                } else {
                    tool = `data-toggle="tooltip"   data-placement="${tooltip["placement"]}" title="${tooltip["description"]}"`
                }
                if ($help) {
                    $help.empty();
                    $help.html(`
                        <span ${tool}>
                            <img id="tooltip-imgs" src="/assets/snd_tooltip/img/tooltip.png"  width="18" height="18">
                        </span>`)

                    if (tooltip && tooltip["event"] === "Hover") {
                        if (tooltip["type"] === "Popover") {
                            $help.attr("data-trigger", "hover");
                            $help.find('[data-toggle="popover"]').popover({ trigger: "manual", html: true, animation: false })
                                .on("mouseenter", function () {
                                    var _this = this;
                                    $(this).popover("show");
                                    $(".popover").on("mouseleave", function () {
                                        $(_this).popover('hide');
                                    });
                                }).on("mouseleave", function () {
                                    var _this = this;
                                    setTimeout(function () {
                                        if (!$(".popover:hover").length) {
                                            $(_this).popover("hide");
                                        }
                                    }, 300);
                                });
                        }
                        else
                            $help.find('[data-toggle="tooltip"]').tooltip();
                    }
                    else if (tooltip && tooltip["event"] === "Focus") {
                        if (tooltip["type"] === "Popover") {
                            me.$wrapper.on('focusin', function () {
                                me.$wrapper.find('[data-toggle="popover"]').popover("show");
                            });
                            me.$wrapper.on('focusout', function () {
                                me.$wrapper.find('[data-toggle="popover"]').popover("hide");
                            });
                        } else {
                            me.$wrapper.on('focusin', function () {
                                me.$wrapper.find('[data-toggle="tooltip"]').tooltip("show");
                            });
                            me.$wrapper.on('focusout', function () {
                                me.$wrapper.find('[data-toggle="tooltip"]').tooltip("hide");
                            });
                        }
                    }
                } else {

                    var $label = me.$wrapper.find("label.clearfix");
                    $label.append(`<span ${tool}>
                            <img id="tooltip-imgs" src="/assets/snd_tooltip/img/tooltip.png"  width="18" height="18">
                        </span>`)

                    if (tooltip && tooltip["event"] === "Hover") {
                        $label.find('[data-toggle="tooltip"]').tooltip();
                        if (tooltip["type"] === "Popover") {
                            $label.find('[data-toggle="popover"]').popover({ trigger: "manual", html: true, animation: false })
                                .on("mouseenter", function () {
                                    var _this = this;
                                    $(this).popover("show");
                                    $(".popover").on("mouseleave", function () {
                                        $(_this).popover('hide');
                                    });
                                }).on("mouseleave", function () {
                                    var _this = this;
                                    setTimeout(function () {
                                        if (!$(".popover:hover").length) {
                                            $(_this).popover("hide");
                                        }
                                    }, 300);
                                });
                        }
                        else
                            $label.find('[data-toggle="tooltip"]').tooltip();
                    }
                    else if (tooltip && tooltip["event"] === "Focus") {
                        if (tooltip["type"] === "Popover") {
                            me.$wrapper.on('focusin', function () {
                                me.$wrapper.find('[data-toggle="popover"]').popover("show");
                            });
                            me.$wrapper.on('focusout', function () {
                                me.$wrapper.find('[data-toggle="popover"]').popover("hide");
                            });
                        } else {
                            me.$wrapper.on('focusin', function () {
                                me.$wrapper.find('[data-toggle="tooltip"]').tooltip("show");
                            });
                            me.$wrapper.on('focusout', function () {
                                me.$wrapper.find('[data-toggle="tooltip"]').tooltip("hide");
                            });
                        }
                    }

                }
            }
        }
    }

}

frappe.ui.form.ControlData = ControlData;
