import { useParams } from "react-router-dom";
import { ShimmerList } from "./Shimmer";
import useRestraurant from "../utils/useRestraurant";
import { RES_MENU_IMG } from "../utils/constants";

const Restaurantdetail = () => {
  const { resId } = useParams();
  const resMenu = useRestraurant(resId);
  return resMenu.length === 0 ? (
    <ShimmerList />
  ) : (
    <div className="primary-container">
      <div className="main_container__3QMrw">
        <button className="styles_header__2bQR- styles_headerMain__aIDOE">
          <h3 className="sc-aXZVg gOhTpA">Recommended (20)</h3>
        </button>
        <div>
          {resMenu.map((item) => (
            <div className="restraurantMenu" key={item?.card?.info?.id}>
              <div className="styles_divider__2JelH"></div>
              <div data-testid="normal-dish-item" className="sc-dSCufp kTlHvX">
                <div className="sc-fxwrCY laJkOR">
                  <div>
                    <div aria-hidden="true" className="sc-brPLxw bwnske">
                      <svg
                        aria-hidden="true"
                        height="16"
                        width="16"
                        className="sc-bXCLTC jnXAjM"
                      ></svg>
                    </div>
                    <div
                      aria-hidden="true"
                      className="sc-aXZVg cjJTeQ sc-hIUJlX gCYyvX"
                    >
                      {item?.card?.info?.name}
                    </div>
                    <div className="sc-eZkCL erfDC">
                      <div aria-hidden="true" className="sc-eBMEME fIxCAp">
                        <span className="sc-cWSHoV igXpGz">
                          <div className="sc-aXZVg kCbDOU">
                            {item?.card?.info?.price / 100}
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="sc-dZoequ ivIfGQ">
                      <div
                        aria-hidden="true"
                        className="sc-aXZVg iPKpeL sc-jnOGJG gaxbGu"
                      >
                        {item?.card?.info?.description}
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="sc-cmaqmh hMzQAT">
                    <button
                      aria-label="See more information about Hyderabadi Chicken Dum Biryani Family Pack"
                      className="sc-kAkpmW klwhhW"
                    >
                      <img
                        alt="Hyderabadi Chicken Dum Biryani Family Pack"
                        className="styles_itemImage__DHHqs"
                        height="144"
                        loading="lazy"
                        width="156"
                        src={RES_MENU_IMG + item?.card?.info?.imageId}
                      />
                    </button>
                    <div className="sc-gFVvzn muOx">
                      <div>
                        <div className="sc-cKXybt jSBPSP">
                          <div className="sc-lgjHQU hNNDEj">
                            <button className="sc-fatcLD sc-pKqro fIkYGV jmIelv add-button-left-container">
                              <div className="sc-aXZVg gnBTYr">−</div>
                            </button>
                            <div className="sc-ggqIjW ieBkxF">
                              <button className="sc-fatcLD sc-dBFDNq fIkYGV RYYj">
                                <div className="sc-aXZVg gnBTYr">Add</div>
                              </button>
                              <button className="sc-fatcLD sc-cgjDci fIkYGV gpQwTP add-button-center-container">
                                <div className="sc-aXZVg gnBTYr">Add</div>
                              </button>
                              <button className="sc-fatcLD sc-epRvzc fIkYGV jenPxt">
                                <div className="sc-aXZVg gnBTYr">1</div>
                              </button>
                            </div>
                            <button className="sc-fatcLD sc-gvPdwL fIkYGV kaObDy add-button-right-container">
                              <div className="sc-aXZVg gnBTYr">+</div>
                            </button>
                          </div>
                          <div className="sc-btwKTd kpKKZB">
                            <div className="sc-aXZVg hUleIq">Customisable</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="styles_divider__2JelH"></div>
    </div>
  );
};

export default Restaurantdetail;
