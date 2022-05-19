import React, { useState } from "react";
import handleDate from "../../../utils/handleDateString";
import handleRenewDate from "../../../utils/handleRenewDate";
import styles from "./styles.module.scss";

const InsuranceItem = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <article
      data-testid="item-click"
      onClick={() => setActive(!active)}
      className={`${styles.card} ${
        active ? styles.active : ""
      } rounded d-flex my-4 p-4`}
    >
      <div className="flex-fill">
        <section
          className={`${styles.cardTitleHolder} border-bottom d-flex justify-content-between`}
        >
          <i
            data-testid="arrow"
            className={`d-none d-md-block rounded-circle me-4 flex-shrink-0 flex-grow-0 ${
              styles.cardIcon
            } ${active ? styles.cardIconActive : ""}`}
          ></i>
          <div className="flex-fill">
            <h3 className={`${styles.cardTitle} mb-0`}>{item.title}</h3>
            <div className={`${styles.cardSubTitle}`}>
              {item.id} | {item.description}
            </div>
          </div>
          <img
            className={`${styles.cardImageTablet} d-none d-md-block d-lg-none`}
            src={item.partner && item.partner.logo}
            alt={item.partner && item.partner.name}
            title={item.partner && item.partner.name}
          />
        </section>
        <section className={`${styles.cardDetails} d-flex`}>
          <div className="d-none d-md-block">
            <div className={styles.cardTitleDetail}>
              {handleDate(item.payment_date)}
            </div>
            <div className={styles.cardSubTitleDetail}>Payment date</div>
          </div>
          <div>
            <div className={styles.cardTitleDetail}>
              {handleDate(item.coverage_start_date)}
              {item.status === "active" && (
                <> to {handleDate(item.coverage_end_date)}</>
              )}
            </div>
            <div className={styles.cardSubTitleDetail}>
              {item.status === "active" ? "Coverage dates" : "Date shipped"}
            </div>
          </div>
          <div className="d-none d-md-block">
            <div className={styles.cardTitleDetail}>
              {item.premium_formatted}
            </div>
            <div className={styles.cardSubTitleDetail}>Price/Premium</div>
          </div>
          {item.renewal && (
            <div className="d-none d-md-block">
              <div className={styles.cardTitleDetail}>
                {handleRenewDate(item.renewal, item.payment_date)}
              </div>
              <div className={styles.cardSubTitleDetail}>Renewal date</div>
            </div>
          )}
          <div className="d-md-none text-end flex-fill">
            <img
              className={styles.cardImageMob}
              src={item.partner && item.partner.logo}
              alt={item.partner && item.partner.name}
              title={item.partner && item.partner.name}
            />
          </div>
        </section>
      </div>

      <img
        className={`${styles.cardImageDesktop} d-none d-lg-block ms-4`}
        src={item.partner && item.partner.logo}
        alt={item.partner && item.partner.name}
        title={item.partner && item.partner.name}
      />
    </article>
  );
};

export default InsuranceItem;
