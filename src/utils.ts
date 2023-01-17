import { useEffect, useState } from "react";

// formatPrice devuelve el precio formateado de un producto
export function formatPrice(price: Price, maxfractionDigits: number) {
    let value = `$ ${price.amount}`
    try {
        value = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currencyDisplay: "narrowSymbol",
            currency: price.currency,
            maximumFractionDigits: maxfractionDigits,
        }).format(price.amount);
    } catch { }

    return value;
}

// formatCondition traduce la condición de un producto a español
export function formatCondition(cond: string) {
    if (cond === "new") {
        return "Nuevo"
    } else if (cond === "used") {
        return "Usado"
    } else {
        return cond
    }
}

// useTitle permite cambiar el titulo de la página de forma dinamica
export function useTitle(t?: string) {
    const [title, setTitle] = useState(t);

    useEffect(() => {
        if (typeof title === 'string' && title.trim().length > 0) {
            document.title = title.trim();
        } else {
            // Titulo por defecto 
            document.title = "Mercado Libre";
        }
    }, [title]);

    return setTitle
}