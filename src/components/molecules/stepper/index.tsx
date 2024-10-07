import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Step = {
  title: string;
  className: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <View className="bg-white">
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.row}>
              {index > 0 && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor:
                        index <= currentStep ? "#060F26" : "#C4C4C4",
                    },
                  ]}
                />
              )}

              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      index <= currentStep ? "#060F26" : "#C4C4C4",
                  },
                ]}
              />
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor:
                        index < currentStep ? "#060F26" : "#C4C4C4",
                    },
                  ]}
                />
              )}
            </View>
          </View>
        ))}
      </View>
      <View style={styles.stepperContainerText}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.row}>
              <Text
                className={step.className}
                style={[
                  // styles.stepText,
                  {
                    color: index <= currentStep ? "#060F26" : "#C4C4C4",
                  },
                ]}
              >
                {step.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 50,
  },
  stepperContainerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  stepContainer: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 2,
    flex: 1,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 10,
    zIndex: 1,
  },
});

export default Stepper;
