import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as Layout from '../constants/Layout'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stress Levels During the Week</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <BarChart
        data={{
        labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      }}
      width={Layout.default.window.width - 16}
      height={300}
      chartConfig={{
        backgroundColor: '#E6E6FA',
        backgroundGradientFrom: '#E6E6FA',
        backgroundGradientTo: '#E6E6FA',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      />
      <Text style={styles.text}>Lowest: </Text>
      <Text style={styles.title}>Highest: </Text>
      <Text style={styles.title}>Average: </Text>
      </View>
      );
    }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
