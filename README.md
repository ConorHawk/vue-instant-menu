# vue-instant-menu


__WARNING: vue-instant-menu is at the pre-alpha stage of development and may undergo significant changes.__

[TOC]

## Getting started

1. Install the plugin:

```
npm install --save vue-instant-menu
```

2. Add the plugin into your app:

```javascript
import Vue from 'vue'
import 'vue-instant-menu'
```

3. All done!
The components have been globally registered and are ready for use!

## Usage

### HTML Structure

Once the `vue-instant-menu` and `menu-item` components are installed globally, they can be used in templates in the following manner:

```html
<vue-instant-menu>
    <menu-item menu-title="Home" menu-href="#"></menu-item>
    <menu-item menu-title="Features" menu-href="#">
        <menu-item menu-title="Elements" menu-href="#"></menu-item>
        <menu-item menu-title="Pricing Tables" menu-href="#"></menu-item>
        <menu-item menu-title="Icons" menu-href="#"></menu-item>
    </menu-item>
    <menu-item menu-title="Portfolio" menu-href="#"></menu-item>
</vue-instant-menu>
```

__This plugin currently only supports one level of nested menu__

### Configuration

Properties for the component `vue-instant-menu`

|Property|Type|Default|Description|
|-------------|:-------------:|-----:|-----:|
|mobileBreakpoint|integer|992|Controls the breakpoint at which the layout switches to mobile|


Properties for the component `menu-item`

|Property|Type|Default|Description|
|-------------|:-------------:|-----:|-----:|
|menuTitle|string||Text content of the menu item|
|menuHref|string||The URL that the menu item will link to|

#### Custom mobile drawer buttons

If you want to swap out the default buttons on mobile, use these named slots:

```
<vue-instant-menu>
    <template slot="mobile-open-button">
        😅
    </template>
    <template slot="mobile-close-button">
        😱
    </template>
    <menu-item menu-title="Home" menu-href="#"></menu-item>
    <menu-item menu-title="Portfolio" menu-href="#"></menu-item>
</vue-instant-menu>
```

### Styling

WIP!
