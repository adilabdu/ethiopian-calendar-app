import { useState, useEffect } from "react";
import { Text, View, ScrollView } from 'react-native';

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
                [...Array(10)].map((year, i) => {
                    return (
                        <Year key={ i } year={ i + 2018 } />
                    )
                })
            }

        </ScrollView>
    );

}

const Month = (props) => {

    const [day, setDay] = useState(0)
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
            <Text style={{ marginBottom: 8, fontSize: 20, fontWeight: 'bold' }}>{ monthNames[props.month] }</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                {

                    [...Array(day)].map((x, i) => {
                        return (
                            <View style={{width: '14.28%', alignItems: 'center'}}>
                                <Text key={i} style={{marginBottom: 6, fontSize: 10, fontWeight: '400'}}>{ }</Text>
                            </View>
                        );
                    })

                }
                {

                    [...Array(30)].map((x, i) => {
                        return (
                            <View style={{ width: '14.28%', alignItems: 'center' }}>
                                <Text key={i} style={{ marginBottom: 6, fontSize: 10, fontWeight: '400' }}>{ i + 1 }</Text>
                            </View>
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

            <Heading title={props.year} />

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
        <View style={{ marginBottom: 16, paddingBottom: 4, borderBottomColor: '#D9D9D9', borderBottomWidth: 0.5 }}>
            <Text style={{ color: '#FF8400', fontWeight: '700', fontSize: 32, }}>{ props.title }</Text>
        </View>
    );

}

const Header = () => {

    return (
        <View style={{
            flexDirection: 'column-reverse',
            height: 32 + 56,
            backgroundColor: '#F7F7F7',
            borderBottomColor: '#D9D9D9',
            borderBottomWidth: 0.5,
        }}>

            <View style={{ padding: 16, backgroundColor: '', alignItems: 'center', height: 56, flexDirection: 'row-reverse' }}>

                <Text> + </Text>
                <Text> Search </Text>

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
