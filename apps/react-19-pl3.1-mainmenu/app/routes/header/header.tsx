import {
  PatternlibAppLauncherItem,
  PatternlibAvatar,
  PatternlibButton,
  PatternlibHeaderPortal,
  PatternlibIcon,
  PatternlibLanguagePickerService,
  PatternlibLink,
  PatternlibMainNavigationItemPortal,
  PatternlibMainNavigationPortal,
  PatternlibMenuFlyout,
  PatternlibMenuFlyoutItem,
  PatternlibMenuFlyoutSeparator,
  PatternlibMessageTypeItem,
  PatternlibMiniBasketItem,
  PatternlibNavigationIconItem,
  PatternlibNotificationInline,
  PatternlibNotificationItem,
  PatternlibPanelFlyout,
} from "@liebherr/patternlib-react";
import { useNavigate } from "react-router";

import { applauncherMockData } from "~/mock-data/applauncher";
import { basketMockData } from "~/mock-data/basketItems";
import { languageMockData } from "~/mock-data/languages";
import { notificationMockData } from "~/mock-data/notification";

export function Header() {
  const handleClick = () => {
    console.log("search icon clicked");
  };

  const handleLanguageSelect = (event: any) => {
    console.log("language selected", event.detail.selected);
  };

  const options = languageMockData;

  const renderMainNavigation = () => {
    let navigate = useNavigate();

    const handleFormClick = () => {
      navigate("/form");
    };

    const handleButtonClick = () => {
      navigate("/button");
    };

    const handleModalClick = () => {
      navigate("/modal");
    };

    const handleBreadcrumbClick = () => {
      navigate("/breadcrumb");
    };

    const handlePl4IntegrationClick = () => {
      navigate("/pl4integration");
    };

    return (
      <PatternlibMainNavigationPortal>
        <PatternlibMainNavigationItemPortal>
          Home
        </PatternlibMainNavigationItemPortal>
        <PatternlibMainNavigationItemPortal onClick={handleFormClick}>
          Form
        </PatternlibMainNavigationItemPortal>
        <PatternlibMainNavigationItemPortal onClick={handleButtonClick}>
          Button
        </PatternlibMainNavigationItemPortal>
        <PatternlibMainNavigationItemPortal onClick={handleModalClick}>
          Modal
        </PatternlibMainNavigationItemPortal>
        <PatternlibMainNavigationItemPortal onClick={handleBreadcrumbClick}>
          Breadcrumb
        </PatternlibMainNavigationItemPortal>
        <PatternlibMainNavigationItemPortal onClick={handlePl4IntegrationClick}>
          Pl4Integration
        </PatternlibMainNavigationItemPortal>
      </PatternlibMainNavigationPortal>
    );
  };

  const renderSearchIcon = () => (
    <PatternlibNavigationIconItem
      slot="search"
      onClick={handleClick}
      iconName="search"
    ></PatternlibNavigationIconItem>
  );

  const renderLanguagePicker = () => (
    <PatternlibLanguagePickerService
      slot="language"
      selected="en"
      options={options}
      onLhLanguageSelect={handleLanguageSelect}
    ></PatternlibLanguagePickerService>
  );

  const renderBasketItems = () => {
    return basketMockData.map((basketItem, index) => (
      <PatternlibMiniBasketItem
        key={"basketItem-" + index}
        sku={basketItem.sku}
        name={basketItem.name}
        imageUrl={basketItem.imageUrl || ""}
        imageAlt={basketItem.name}
        price={"EUR 800"}
        priceStrikethrough={"EUR 1000"}
        quantity={basketItem.quantity + "x"}
        badgeTopText={basketItem.badgeTopText}
        badgeBottomText={basketItem.badgeBottomText}
      />
    ));
  };

  const renderNotificationItems = () => {
    return notificationMockData.map((notification, index) => (
      <PatternlibNotificationItem
        key={index}
        viewed={notification.isRead}
        isImportant={notification.isImportant}
      >
        <div slot="icon-start">
          <PatternlibMessageTypeItem
            type="icon"
            iconName="notification.iconName"
          ></PatternlibMessageTypeItem>
        </div>

        <div slot="headline">{notification.subject}</div>
        <div slot="info">
          {notification.publishedSince} • {notification.genreName}
        </div>

        <div slot="icon-end">
          <PatternlibIcon icon-name="x" size="24px"></PatternlibIcon>
        </div>
      </PatternlibNotificationItem>
    ));
  };

  const renderNotifications = () => {
    const notificationData = notificationMockData;
    return (
      <PatternlibPanelFlyout
        slot="more-first-row"
        scrollablefitcontent={false}
        autoHeight={false}
        width={748}
        useFlyoutGroups
        height={600}
      >
        <PatternlibNavigationIconItem
          slot="element-icon"
          iconName="my-notifier"
          badge={notificationData.length.toString()}
        />

        <div slot="flyout-headline">Messages \({notificationData.length}\)</div>
        <div slot="flyout-action-right">
          <PatternlibLink type="prominent" label="View all" variant="context" />
        </div>
        <div slot="flyoutItems">{renderNotificationItems()}</div>
        <div slot="flyout-action-left">
          <PatternlibLink
            type="prominent"
            label="Clear all"
            variant="action"
            icon="x"
          ></PatternlibLink>
        </div>
      </PatternlibPanelFlyout>
    );
  };

  const renderAvatar = () => {
    return (
      <PatternlibMenuFlyout
        slot="avatar"
        flyout-position="auto"
        width="280px"
        user-name="John Doe"
        user-info="Liebherr"
        user-initials="jd"
        default-align="left"
        zIndex={200}
        useFlyoutGroups
      >
        <PatternlibNavigationIconItem slot="flyout-button">
          <PatternlibAvatar initials="LB"></PatternlibAvatar>
        </PatternlibNavigationIconItem>

        <div slot="flyout-content" style={{ display: "grid" }}>
          <PatternlibMenuFlyoutSeparator></PatternlibMenuFlyoutSeparator>
          <PatternlibMenuFlyoutItem
            label={"Personal data"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Colleagues"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Address book"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Businessrelations"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Products"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem label={"Orders"}></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem label={"Offers"}></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Messages"}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem
            label={"Licences and Services"}
            style={{ borderBottom: "none" }}
          ></PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutSeparator></PatternlibMenuFlyoutSeparator>
          <PatternlibMenuFlyoutItem
            isActionItem
            label="Sign in with other Company"
          >
            <PatternlibIcon
              icon-name="profile-change"
              slot="icon-left"
              bold
            ></PatternlibIcon>
          </PatternlibMenuFlyoutItem>
          <PatternlibMenuFlyoutItem isActionItem label="Log out">
            <PatternlibIcon
              icon-name="exit"
              slot="icon-left"
              bold
            ></PatternlibIcon>
          </PatternlibMenuFlyoutItem>
        </div>
      </PatternlibMenuFlyout>
    );
  };

  const renderAppLauncher = () => {
    return (
      <PatternlibPanelFlyout
        slot="more-first-row"
        width={748}
        height={600}
        autoHeight={false}
        scrollablefitcontent={false}
        useFlyoutGroups={true}
      >
        <PatternlibNavigationIconItem
          slot="element-icon"
          iconName={"app-launcher"}
        ></PatternlibNavigationIconItem>

        <div slot="flyout-headline">
          My apps \({applauncherMockData.length}\)
        </div>
        <div slot="flyout-action-right">
          <PatternlibLink
            type="prominent"
            label="Request Licence"
            variant="context"
          ></PatternlibLink>
        </div>

        <div
          slot="flyout-items"
          className="app-launcher-items"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h4 className="app-launcher-items-headline">Favourites</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: "24px",
            }}
          ></div>

          <div style={{ marginTop: "8px" }}>
            <h4 className="app-launcher-items-headline">All apps</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                columnGap: "24px",
              }}
            >
              {applauncherMockData.map((app) => (
                <PatternlibAppLauncherItem
                  key={app.id}
                  label={app.displayName}
                  iconName={app.iconName}
                />
              ))}
            </div>
          </div>
        </div>
        <div slot="flyout-footer" style={{ marginBottom: "32px" }}>
          <div className="empty space"></div>
        </div>
      </PatternlibPanelFlyout>
    );
  };

  const renderShoppingCart = () => {
    return (
      <PatternlibPanelFlyout
        slot="more"
        scrollablefitcontent={false}
        autoHeight={false}
        width={748}
        height={600}
        useFlyoutGroups={true}
      >
        <PatternlibNavigationIconItem
          slot="element-icon"
          iconName="shopping-cart"
          badge={basketMockData.length.toString()}
        ></PatternlibNavigationIconItem>
        <div slot="flyout-headline">Mini basket</div>
        <div slot="flyout-action-right">
          <PatternlibLink
            type="prominent"
            label="View all"
            variant="context"
          ></PatternlibLink>
        </div>
        <div slot="flyout-notification">
          <PatternlibNotificationInline showIcon={true} type="info">
            <div slot="custom-content">
              You received this cart from <b>&lt;shopManagerName&gt;</b>. on{" "}
              <b>8 July 2024, 10.17 a.m.</b> with a personal message: I've sent
              you the shopping carts for review. Could you please take a look
              and complete the orders? Thanks for your help!
            </div>
          </PatternlibNotificationInline>
        </div>
        <div slot="flyout-items" className="mini-basket-items">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {renderBasketItems()}
          </div>
        </div>
        <div slot="flyout-action-left">
          <PatternlibLink
            type="prominent"
            label="New shopping cart"
            variant="action"
            icon="plus"
          ></PatternlibLink>
        </div>
        <div slot="flyout-action-button">
          <PatternlibButton
            display="block"
            label="Order shopping cart"
            icon-position="right"
          >
            <PatternlibIcon
              iconName="font-arrow"
              size="24px"
              slot="icon"
              tabIndex={-1}
            />
          </PatternlibButton>
        </div>
      </PatternlibPanelFlyout>
    );
  };

  return (
    <PatternlibHeaderPortal portalName={"Portalname"}>
      {renderMainNavigation()}
      {renderSearchIcon()}
      {renderLanguagePicker()}
      {renderNotifications()}
      {renderAvatar()}
      {renderAppLauncher()}
      {renderShoppingCart()}
      <PatternlibNavigationIconItem
        slot="info-header"
        iconName="info-circle"
      ></PatternlibNavigationIconItem>
    </PatternlibHeaderPortal>
  );
}
