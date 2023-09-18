import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

interface DatePickerProps {
  onSetDate: (date: Date) => void
}

export const DatePicker = ({ onSetDate }: DatePickerProps) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const handleChange = (event, selectedDate) => {
      setShow(false);
      setDate(selectedDate);
      onSetDate(date);
    };

    const showDatepicker = () => {
      setShow(true);
      setMode('date');
    };

    return (
      <SafeAreaView>
        <View>
          <Text>{date.toLocaleDateString("en-GB")}</Text>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={handleChange}
          />
        )}
      </SafeAreaView>
    );
  };