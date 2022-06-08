import { useState, useEffect } from "react";
import { Text, View, ScrollView } from 'react-native';

import PlusIcon from "./assets/plus.svg"
import SearchIcon from "./assets/search.svg"

const App = () => {

  return (
      <View style={{ height: '100%', backgroundColor: '' }}>

          <Header />
          <ContentBody />
          <Footer />

      </View>
  );
}

const ContentBody = () => {

    return (
        <ScrollView style={{
            backgroundColor: '',
            padding: 16,
            // flexDirection: 'row',
            flex: 1,
        }}>

            {
                [...Array(11)].map((year, i) => {
                    return (
                        <Year key={ i } year={ i + 2009 } />
                    )
                })
            }

        </ScrollView>
    );

}

const Day = (props) => {

    return (
        <View style={{
            marginVertical: 1,
            width: props.width,
            aspectRatio: 1,
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: props.highlight ? '#FF8400' : ''
        }}>

            <Text style={{
                fontSize: 10,
                textAlign: 'center',
                color: props.highlight ? '#FFFFFF' : '#000000',
                fontWeight: props.highlight ? '600' : '500'
            }}>
                { props.day }
            </Text>

        </View>
    );
}

const Month = (props) => {

    const [ today, setToday ] = useState({
        'day': 1,
        'month': 'ሰኔ',
        'year': 2014
    })
    const dateIsToday = (day, month, year) => {

        return (
            day === today.day &&
            month === today.month &&
            year === today.year
        );
    }

    const isMonth = (month, year) => {

        return (
            month === today.month &&
            year === today.year
        );
    }

    const [ day, setDay ] = useState(0)

    const monthNames = {
        1: "መስከረም",
        2: "ጥቅምት",
        3: "ሕዳር",
        4: "ታህሳስ",
        5: "ጥር",
        6: "የካቲት",
        7: "መጋቢት",
        8: "ሚያዝያ",
        9: "ግንቦት",
        10: "ሰኔ",
        11: "ሐምሌ",
        12: "ነሐሴ",
        13: "ጳጉሜን",
    }

    const dayOffset = {
        0: 5,
        1: 6,
        2: 0,
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: 5,
        8: 6,
        9: 0,
        10: 1,
        11: 2,
        12: 3
    }

    useEffect(() => {

        // TODO: clean up
        const years = 5500 + props.year
        const wongel = Math.floor(years / 4)

        const total = years + wongel + 2
        let offset = total % 7
        const monthOffset = 2 * (props.month - 1)
        offset += ((monthOffset) % 7)

        setDay(dayOffset[offset]);

    });

    return (
        <View style={{ backgroundColor: '', width: '30%', marginBottom: 16 }}>
            <Text style={{ color: isMonth(monthNames[props.month], props.year) ? '#FF8400' : 'black', marginBottom: 8, fontSize: 20, fontWeight: 'bold' }}>{ monthNames[props.month] }</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>

                {

                    [...Array(day)].map((x, i) => {
                        return (
                            <Day key={ i } width="14.28%" />
                        );
                    })

                }
                {
                    [...Array(props.month !== 13 ? 30 : props.year % 4 === 3 ? 6 : 5)].map((x, i) => {
                        return (
                            <Day
                                highlight={dateIsToday(
                                    i+1,
                                    monthNames[props.month],
                                    props.year
                                )}
                                key={ i }
                                width="14.28%"
                                day={ i + 1 }
                            />
                        );
                    })
                }

            </View>
        </View>

    );

}

const Year = (props) => {

    return (
        <View style={{ marginBottom: 32 }}>

            <Heading color={ props.year === 2014 ? '#FF8400' : 'black' } title={props.year} />

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                {
                    [...Array(13)].map((_, i) => {
                        return (<Month key={ i } year={ props.year } month={ i + 1 } />)
                    })
                }

            </View>

        </View>
    );

}

const Heading = (props) => {

    return (
        <View style={{ marginBottom: 16, paddingBottom: 4, borderBottomColor: '#D9D9D9', borderBottomWidth: 0.5, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: !! props.color ? props.color : 'black', fontWeight: '700', fontSize: 32, marginRight: 24 }}>{ props.title }</Text>
        </View>
    );

}

const Header = () => {

    return (
        <View style={{
            flexDirection: 'column-reverse',
            height: 32 + 60,
            backgroundColor: '#F7F7F7',
            borderBottomColor: '#D9D9D9',
            borderBottomWidth: 0.5,
        }}>

            <View style={{ paddingHorizontal: 16, backgroundColor: '', alignItems: 'center', height: 60, flexDirection: 'row-reverse' }}>

                <PlusIcon style={{ marginHorizontal: 8 }} width={ 24 } height={ 24 } />
                <SearchIcon style={{ marginHorizontal: 20 }} width={ 24 } height={ 24 } />

            </View>

        </View>
    );

}

const Footer = () => {

    return (
        <View style={{
            flexDirection: 'column',
            height: 32 + 56,
            backgroundColor: '#F7F7F7',
            borderTopColor: '#D9D9D9',
            borderTopWidth: 0.5,
        }}>

            <View style={{ padding: 16, backgroundColor: '', justifyContent: 'space-between', alignItems: 'center', height: 56, flexDirection: 'row' }}>

                <Text style={{ color: '#FF8400', fontSize: 18 }}> Today </Text>
                <Text style={{ color: '#FF8400', fontSize: 18 }}> Calendars </Text>
                <Text style={{ color: '#FF8400', fontSize: 18 }}> Inbox </Text>

            </View>

        </View>
    );

}

export default App;
