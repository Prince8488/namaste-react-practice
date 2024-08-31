import { useDispatch, useSelector } from "react-redux";
import { RES_MENU_IMG } from "../utils/constants";
import { claerCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(claerCart());
  };

  const handleremoveItem = () => {
    dispatch(removeItem());
  };
  return cardItems.length == 0 ? (
    "cart is empty"
  ) : (
    <section className="cart_wrapper">
      <div>
        <div className="cart_lists">
          <div className="cart_title">
            <div className="cart_title_flex">
              <span className="material-icons">local_mall</span>
              Your Shopping Cart
            </div>
            <div className="header-right right">
              <button
                className="book-button cart-btn"
                onClick={() => handleClearCart()}
              >
                <span className="material-icons">shopping_cart</span>
                clear
              </button>
            </div>
          </div>

          <div className="cart_list_wrap">
            {...cardItems.map((item) => (
              <div
                className="cart_responsive"
                data-itemid="card_item"
                key={item.id}
              >
                <div className="tr_item">
                  <div className="td_item item_img">
                    <img src={RES_MENU_IMG + item.imageId} />
                  </div>
                  <div className="td_item item_name">
                    <label className="main">{item.name}</label>
                    <label className="sub">Ref. 007891987</label>
                  </div>
                  <div className="td_item item_color">
                    <label>{item.description}</label>
                  </div>
                  <div className="td_item item_qty">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="more">More</option>
                    </select>
                  </div>
                  <div className="td_item item_price">
                    <label>{item.price / 100}</label>
                  </div>
                  <div className="td_item item_remove">
                    <i
                      className="material-icons"
                      onClick={() => handleremoveItem()}
                    >
                      close
                    </i>
                  </div>
                </div>
              </div>
            ))}
            <div className="footer">
              <div className="back_cart">
                <a href="#back">
                  <i className="material-icons">arrow_back</i>
                </a>
              </div>
              <div className="subtotal">
                <label>Subtotal: </label>
                <strong>$2451.00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
