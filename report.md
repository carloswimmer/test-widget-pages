I'm describing here what is covered and what is missing from my part:

_Operator_
demoaccount@regiondo.de

_Environment_
dev

_Product EN_
{code:html}
<product-catalog-widget
      widget-id="f674f08d-463d-43a6-a81c-02d09bceeeae"
    ></product-catalog-widget>
{code}

_Product FR_
{code:html}
<product-catalog-widget
      widget-id="006a6354-decb-443c-815c-9bedaff95f31"
    ></product-catalog-widget>
{code}

_Product DE_
{code:html}
<product-catalog-widget
      widget-id="da29025c-76d1-44bd-a6db-0b358969776f"
    ></product-catalog-widget>
{code}

_Product IT_
{code:html}
<product-catalog-widget
      widget-id="8299b9e9-4c90-4496-bf7d-4006421ead18"
    ></product-catalog-widget>
{code}

_Browsers_

- Chrome (with 3rd party cookies)
- Safari (default)
- Firefox (no 3rd party cookies)

_Cases_

- Specific Dates (1 variation w/ 2 options) - Quant | Date dropdown | Display date and time sequentially (default)
- Specific Dates (2 variation w/ 2 options) - Booking (variation based) | Date dropdown | Price list (dropdown) | Display date and time sequentially (default)
- Specific Dates (2 variation w/ 2 options) - Booking (variation based) | Calendar | Price list (radio buttons) | Display date and time simultaneously _(failed before payment)_

_Scenarios_

- Catalog widget generation in the Widget Editor
- Create widgets for locales: DE, EN, IT, FR
- Check availability for cases
- Check possibility for "Go back" to products in Catalog
- Check possibility to add tickets to cart
- Check possibility to add gift to cart
- Check possibility to come back from cart to products selection
- Check that tickets are generated in the success page and in the Dashboard
- Booking widget - Checkout - Contact step
- Booking widget - Checkout - Payment step
- Booking widget - Checkout - Success step

_Payment methods_
!Screenshot 2022-09-09 at 01.06.05.png|thumbnail!

_Cases not tested_

- Specific Dates (1 variation w/ 2 options) - Variation (date based) | Calendar | Display date and time simultaneously
- Specific Dates (2 variation w/ 2 options) - Quant | Date dropdown | Price list (dropdown) | Display date and time sequentially (default)
- Specific Dates (2 variation w/ 2 options) - Variation (date based) | Calendar | Price list (radio buttons) | Display date and time simultaneously
