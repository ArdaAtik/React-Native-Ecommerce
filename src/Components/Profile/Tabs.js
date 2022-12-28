import { useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Profile from "./Profile";
import Orders from "./Orders";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Text } from "native-base";
import Colors from "../../color";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabsBar = (props) => {
    return (
      <TabBar
        {...props}
        style={{ backgroundColor: Colors.black }}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({ route, color }) => (
          <Text style={{ color, ...styles.text }}>{route.title}</Text>
        )}
        tabStyle={styles.tabStyle}
        indicatorStyle={{ backgroundColor: Colors.black }}
      />
    );
  };
  return (
    <TabView
      renderTabBar={renderTabsBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      navigationState={{ index, routes }}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "#0e0603",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
