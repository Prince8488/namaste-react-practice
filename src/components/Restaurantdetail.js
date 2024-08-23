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
      <div className="accordion-container">
        {resMenu.map((item) => (
          <details key={item.card?.card?.title}>
            <summary>
              <span className="accordion-title">
                {item.card?.card?.title +
                  " " +
                  "(" +
                  item.card.card.itemCards.length +
                  ")"}
              </span>
              <span className="accordion-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </span>
            </summary>
            {item.card?.card?.itemCards.map((item) => (
              <div className="accordion-content" key={item?.card?.info?.id}>
                <div>
                  <div className="restraurantMenu">
                    <div className="styles_divider__2JelH"></div>
                    <div
                      data-testid="normal-dish-item"
                      className="sc-dSCufp kTlHvX"
                    >
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
                            <div
                              aria-hidden="true"
                              className="sc-eBMEME fIxCAp"
                            >
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
                                <div className="sc-btwKTd kpKKZB"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </details>
        ))}
      </div>
    </div>
  );
};

export default Restaurantdetail;
