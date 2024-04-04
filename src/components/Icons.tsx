import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

const dotIcon = `
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="10" fill="#0D0D0D" />
  </svg>
`;

const circleIcon = `
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke="#F7CD2E" stroke-width="10" fill="none" />
  </svg>
`;

const crossIcon = `
  <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="10" x2="90" y2="90" stroke="#38CC77" stroke-width="10" />
    <line x1="90" y1="10" x2="10" y2="90" stroke="#38CC77" stroke-width="10" />
  </svg>
`;

const Icons = ({ name }) => {
  let iconXml;

  switch (name) {
    case 'dot':
      iconXml = dotIcon;
      break;
    case 'circle':
      iconXml = circleIcon;
      break;
    case 'cross':
      iconXml = crossIcon;
      break;
    default:
      iconXml = dotIcon;
  }

  return (
    <View style={styles.iconContainer}>
      <SvgXml xml={iconXml} width="38" height="38" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 38,
    height: 38,
  },
});

export default Icons;
