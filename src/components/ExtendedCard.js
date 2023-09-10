import {React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function ExtendedCard(props) {
    const [count, setCount] = useState(1);
    const toggleExtended = props.toggleExtended;
    const [currentItem, setCurrentItem] = useState(props.currentItem);
    const id = props.id;
    function plus() {
        if(count < currentItem.itemsNumber)
        setCount((prevCount) => prevCount + 1);
    }
    function minus() {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    }
    useEffect(() => {
        setCurrentItem((prevCurrentItem) => {
            return {
                ...prevCurrentItem,
                count: count,
            };
        });
    }, [count]);
    return (
        <div className="extended">
            <div className="extended--overlay" onClick={toggleExtended}></div>
            <div className="container row">
                <p className="cart--close" onClick={toggleExtended}>
                    X
                </p>
                <div className="col-8">
                    <h1 className="extended--header"> {currentItem.title}</h1>
                    <div className="extended--price">
                        {currentItem.price} <span>ج.م</span>
                    </div>
                    <h3 className="extended--second-header">:الوصف</h3>
                    <p className="extended--desc">الأسم:مفرش كروشيه</p>
                    <p className="extended--desc">الخامه:صوف</p>
                    <p className="extended--desc">اللون:متعدد الألوان</p>
                    <p className="extended--desc">الطول:40سم</p>
                    <p className="extended--desc">العرض:40سم</p>
                    <p className="extended--available">{currentItem.itemsNumber} العناصر المتوفرة</p>
                </div>
                <div className="col-4 extended--image-cover">
                    <img
                        src={require(`../cardImages/${currentItem.name}.png`)}
                        alt=""
                        className="extended--image"
                    />
                </div>
                <div className="extended--count">
                    <button className="count" onClick={plus}>
                        +
                    </button>
                    <p className="count--number">{count}</p>
                    <button className="count" onClick={minus}>
                        -
                    </button>
                </div>
                <button
                    className="extended--add"
                    onClick={() => props.addItem(currentItem)}
                >
                    اضف الي عربة التسوق
                </button>
                <div
                    className="nav--cart extended--cart"
                    onClick={()=> {
                        props.cartLength?props.toggleExtended():undefined;
                        props.cartLength?props.toggleCart():undefined;
                    }}
                >
                    <span className="cart--icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    <div className="cart--count">{props.cartLength}</div>
                </div>
            </div>
        </div>
    );
}
export default ExtendedCard;
