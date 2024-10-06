import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SVGChatIcon from '@/components/svg/SVGChatIcon';
import SvgHomeIcon from '@/components/svg/SVGHomeIcon';
import SVGProfile from '@/components/svg/SVGProfile';
import SVGJobs from '@/components/svg/SVGJobs';
import SVGCommunity from '@/components/svg/SVGCommunity';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const iconDefaultColor = Colors[colorScheme ?? 'light'].icon

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <SvgHomeIcon fill={focused ? color : iconDefaultColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <SVGChatIcon fill={focused ? color : iconDefaultColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <SVGCommunity fill={focused ? color : iconDefaultColor} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color, focused }) => (
            <SVGJobs fill={focused ? color : iconDefaultColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <SVGProfile fill={focused ? color : iconDefaultColor} />
          ),
        }}
      />

    </Tabs>
  );
}
