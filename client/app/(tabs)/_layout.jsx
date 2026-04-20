import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarLabel: "Feed"
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarLabel: "Discover"
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          tabBarLabel: "+"
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Alerts",
          tabBarLabel: "Notifications"
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile"
        }}
      />
    </Tabs>
  );
}
