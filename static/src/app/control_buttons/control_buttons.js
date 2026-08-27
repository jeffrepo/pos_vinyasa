import { TextInputPopup } from "@point_of_sale/app/components/popups/text_input_popup/text_input_popup";
import { ControlButtons } from "@point_of_sale/app/screens/product_screen/control_buttons/control_buttons";
import { makeAwaitable } from "@point_of_sale/app/utils/make_awaitable_dialog";
import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";

patch(ControlButtons.prototype, {
    async clickPosCustomerName() {
        const order = this.currentOrder;
        if (!order) {
            return;
        }

        const customerName = await makeAwaitable(this.dialog, TextInputPopup, {
            title: _t("Cliente"),
            rows: 4,
            startingValue: order.pos_customer_name || "",
        });

        if (typeof customerName === "string") {
            order.pos_customer_name = customerName;
        }
    },
});
