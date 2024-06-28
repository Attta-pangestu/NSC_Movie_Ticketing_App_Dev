import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import * as EncryptedStorage from 'expo-secure-store';
import { styles } from './style';
import { generateDate, generateOrderId, generateSeats, timeArray } from '../../utils';
import AppHeader from '../../components/AppHeader';
import { COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import * as IconsSolid from 'react-native-heroicons/solid';


const BookingSeatScreen = ({ navigation, route }: any) => {
  const [dateArray, setDateArray] = useState<any[]>(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [twoSeatArray, setTwoSeatArray] = useState<any[][]>(generateSeats());
  const [selectedSeatArray, setSelectedSeatArray] = useState<number[]>([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();
  const [showWebView, setShowWebView] = useState<boolean>(false);
  const [redirectUrl, setRedirectUrl] = useState<string>('');



  const selectSeat = (index: number, subindex: number, num: number) => {
    if (!twoSeatArray[index][subindex].taken) {
      let array: number[] = [...selectedSeatArray];
      let temp = [...twoSeatArray];
      temp[index][subindex].selected = !temp[index][subindex].selected;
      if (!array.includes(num)) {
        array.push(num);
        setSelectedSeatArray(array);
      } else {
        const tempindex = array.indexOf(num);
        if (tempindex > -1) {
          array.splice(tempindex, 1);
          setSelectedSeatArray(array);
        }
      }
      setPrice(array.length * 55);
      setTwoSeatArray(temp);
    }
  };


  const bookSeatHandler = async () => {
    if (
      selectedSeatArray.length !== 0 &&
      selectedTimeIndex !== undefined &&
      selectedDateIndex !== undefined
    ) {
      try {
        await EncryptedStorage.setItemAsync(
          'ticket',
          JSON.stringify({
            seatArray: selectedSeatArray,
            time: timeArray[selectedTimeIndex],
            date: dateArray[selectedDateIndex],
            ticketImage: route.params.PosterImage,
          })
        );
        const order_id = generateOrderId(); 
        const response = await axios.post(
          'https://nsc-midtrans-payment-server.vercel.app/api/payment',
          {
            order_id: order_id,
            gross_amount: price * 1000,
          }
        );

        const { redirect_url } = response.data;
        setRedirectUrl(redirect_url);
        setShowWebView(true);
      } catch (error) {
        ToastAndroid.showWithGravity(
          'Failed to process payment. Please try again later.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        console.error('Something went Wrong while storing in BookSeats Functions', error);
      }

    } else {
      ToastAndroid.showWithGravity(
        'Please Select Seats, Date and Time of the Show',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  const handleWebViewNavigationStateChange = (newNavState : any) => {
    const { url } = newNavState;
    if (url.includes('transaction_status=settlement') || url.includes('transaction_status=capture')) {
      // Payment successful, navigate to Ticket screen
      setShowWebView(false);
      navigation.navigate('Ticket', {
        seatArray: selectedSeatArray,
        time: timeArray[selectedTimeIndex],
        date: dateArray[selectedDateIndex],
        ticketImage: route.params.PosterImage,
      });
    }
  };

  if (showWebView) {
    return (
      <WebView
        source={{ uri: redirectUrl }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={{uri: route.params?.BgImage}}
          style={styles.ImageBG}>
          <LinearGradient
            colors={[COLORS.BlackRGB10, COLORS.Black]}
            style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <AppHeader header={''} action={() => navigation.goBack()} />
            </View>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.screenText}>Sisi layar disini</Text>
      </View>

      <View style={styles.seatContainer}>
        <View style={styles.containerGap20}>
          {twoSeatArray?.map((item, index) => {
            return (
              <View key={index} style={styles.seatRow}>
                {item?.map((subitem, subindex) => {
                  return (
                    <TouchableOpacity
                      key={subitem.number}
                      onPress={() => {
                        selectSeat(index, subindex, subitem.number);
                      }}>
                      <IconsSolid.ArchiveBoxIcon
                        fontSize={FONTSIZE.size_24}
                        color={
                          subitem.selected
                            ? COLORS.Orange
                            : subitem.taken
                              ? COLORS.Grey
                              : COLORS.White
                        }
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
        <View style={styles.seatRadioContainer}>
          <View style={styles.radioContainer}>
            <IconsSolid.ArchiveBoxIcon
              fontSize={FONTSIZE.size_20}
              color={COLORS.White}
            />
            <Text style={styles.radioText}>Tersedia</Text>
          </View>
          <View style={styles.radioContainer}>
            <IconsSolid.ArchiveBoxIcon
              fontSize={FONTSIZE.size_20}
              color={COLORS.Grey}
            />
            <Text style={styles.radioText}>Booked</Text>
          </View>
          <View style={styles.radioContainer}>
            <IconsSolid.ArchiveBoxIcon
              fontSize={FONTSIZE.size_20}
              color={COLORS.Orange}
            />
            <Text style={styles.radioText}>Dipilih</Text>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={dateArray}
          keyExtractor={(item) => item.date}
          horizontal
          bounces={false}
          contentContainerStyle={styles.containerGap24}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                <View
                  style={[
                    styles.dateContainer,
                    index == 0
                      ? {marginLeft: SPACING.space_24}
                      : index == dateArray.length - 1
                        ? {marginRight: SPACING.space_24}
                        : {},
                    index == selectedDateIndex
                      ? {backgroundColor: COLORS.Orange}
                      : {},
                  ]}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={styles.dayText}>{item.day}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.OutterContainer}>
        <FlatList
          data={timeArray}
          keyExtractor={(item) => item}
          horizontal
          bounces={false}
          contentContainerStyle={styles.containerGap24}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => setSelectedTimeIndex(index)}>
                <View
                  style={[
                    styles.timeContainer,
                    index == 0
                      ? {marginLeft: SPACING.space_24}
                      : index == dateArray.length - 1
                        ? {marginRight: SPACING.space_24}
                        : {},
                    index == selectedTimeIndex
                      ? {backgroundColor: COLORS.Orange}
                      : {},
                  ]}>
                  <Text style={styles.timeText}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.buttonPriceContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Total Pembayaran</Text>
          <Text style={styles.price}>
            {price > 0 ? `Rp ${price}.000` : '-'}{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={bookSeatHandler}>
          <Text style={styles.buttonText}>Checkout Ticket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};



export default BookingSeatScreen;
