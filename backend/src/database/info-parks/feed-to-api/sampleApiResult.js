// live data, making api calls
// let placeId = await getPlaceId(park[0]); // individual park array from raw data
// let result = await getPlaceDetails(placeId);

export const PLACE_API_RESULT_SAMPLE = {
    address_components: [
        { long_name: 'California 1', short_name: 'CA-1', types: [Array] },
        { long_name: 'Cambria', short_name: 'Cambria', types: [Array] },
        {
            long_name: 'San Luis Obispo County',
            short_name: 'San Luis Obispo County',
            types: [Array]
        },
        { long_name: 'California', short_name: 'CA', types: [Array] },
        { long_name: 'United States', short_name: 'US', types: [Array] },
        { long_name: '93428', short_name: '93428', types: [Array] }
    ],
    adr_address: 'Moonstone Beach Dr &amp;, <span class="street-address">CA-1</span>, <span class="locality">Cambria</span>, <span class="region">CA</span> <span class="postal-code">93428</span>, <span class="country-name">USA</span>',
    business_status: 'OPERATIONAL',
    formatted_address: 'Moonstone Beach Dr &, CA-1, Cambria, CA 93428, USA',
    formatted_phone_number: '(805) 927-2010',
    geometry: {
        location: { lat: 35.58383639999999, lng: -121.1214333 },
        viewport: { northeast: [Object], southwest: [Object] }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png',
    icon_background_color: '#4DB546',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet',
    international_phone_number: '+1 805-927-2010',
    name: 'Leffingwell Landing Park',
    opening_hours: {
        open_now: false,
        periods: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
        ],
        weekday_text: [
            'Monday: 6:00 AM – 8:00 PM',
            'Tuesday: 6:00 AM – 8:00 PM',
            'Wednesday: 6:00 AM – 8:00 PM',
            'Thursday: 6:00 AM – 8:00 PM',
            'Friday: 6:00 AM – 8:00 PM',
            'Saturday: 6:00 AM – 8:00 PM',
            'Sunday: 6:00 AM – 8:00 PM'
        ]
    },
    photos: [
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAbxUpVfxqJewPzkgkkPyGGDE2llblGmmbPIUJO5jLQCoVXfyvRHcUGARQBdYDltS7Hpp9vbVU8Jnoc-wO39kQN-XRr7Pd9tgTeXFdjXs6ZecUN7wm-wG3hFL2mDPZXrhnKipZDhqJa6gFzJ3wnVnyZ4i_hLdoPFaAJe6ezk2s7ybXg',
            width: 4032
        },
        {
            height: 3000,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBcGCy82QPSz2vnfJKTMuOS_cXx6N2A6VgfW6iuXphxZVpttUFmt0RCLms7tpLBxRgWdHl3q_tN-2DN24NEjzZEROWcLml3wgvZoVxUY5WARYg6dnl7El8LSuRRaMCRL5EyR2sH0jw8m4K5NMOt-xCHKdcMNzFhquCzumivhZ9Qthp7',
            width: 4000
        },
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDuJQ7diMkmwphUZc6ulKFQoRsJiU9IstmbKFloTRHv0FfnPom5-eUvhZBNmYQq1_CvK-Pxq6kQA4cxudd2FyphmRxWk6miQpfMARoOEZsWnMtBYP40dUyOVSI763tEAPhGPuKtzFEPMherBUNqPaK-gpkBjFgu4b3Ml1QqboY96AC3',
            width: 4032
        },
        {
            height: 2941,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBf9IypyEIUGaZD4NNYCDsrDOMJr-_8oywQmGb37-rxCeJUA9zg8qWfNRHfij_7fNxFRtp2-FgMtvjUxnCUMXKX7LiAd-MaozeOJAOG5-IdM4VBH8Qc-BvrJVpUrIUDZdrHjM1BMqgapBEf9mkeLD3TOMvnYfc0-yDqO2u83N8nKCpX',
            width: 3922
        },
        {
            height: 2160,
            html_attributions: [Array],
            photo_reference: 'Aap_uEB3D3-PAfHRkniakSNkDVWK0N_fetJ9SRM-Ulqungc-xZnhA_6Q2Fs6cSXdsy5NxEd9zLst60cr5-dpcDPkt7ZegkgdW4I7l1P2nLX6gzsfGrhuiSmzer2PFgubHrrFnN4qbEt0JsQA874_pkIcQ07AryFz6dlmw3MUE3lVmzxm3Kc',
            width: 2880
        },
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDPqe15RrmKEh_jfwZ9QDyNis5bC2YCqtEDE_dAOXmGdAaSdY1myvHSwfj4xHQm35vdjxWa9riVgCXYk137nAv2liHt2gw4w1qxwWh0nr-6pqH8z0f5Hq39fGmBPkGhFHk7N43IYaztpwGyoTqjiiP_fwz2WBu_aHzQvukYi2d1bFKt',
            width: 4032
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEA4h2qhlK2geAHaARW4TO_3-P4n_5X-O70zF8_IE0nL-hHVeW0HLO1FTNu2kjh_aAUk0W0Qxe3vLplBCvbXTNSAUIxJm5u6EbOEY0r8kWCsx0NDQNsuWSs-duLnGk9Z_4blnl1Q2lYQroiNXnEqmVGX9znXLygjbAvV6fiE1z-SPINj',
            width: 4032
        },
        {
            height: 1440,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDQnAko2hDEBCRjWBJMbsMNAuA9WaG2qG7yQ-MPDPJGxmUcv58BKdGh5D5MdBPpR8Renytna2SrQZb7k2t9YFEA037lWpKGaFLiGAyprSTAVut2rRqxcDuhkRhIgvLLFK91JaKREC9PWJTTby-QznNX4T2r4GSDwkQcim904dbmBQs0',
            width: 2560
        },
        {
            height: 1222,
            html_attributions: [Array],
            photo_reference: 'Aap_uECcvXdX7uNwc4mwojkbmrre0-8WLsmtpbWewsAFmeTEF98Z7En1TVmnKxiD_M0pcxDcW0uFlDgEtjbQ76hY3GLhat576oPJe4rv2IDVcA7QO4gDbIPFP3YPl3ADYhOZvWxzEKdWqaS_bU3sj20R_939mUEQIhYm9vDosU4CfHht_cdg',
            width: 1630
        },
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAKVh7zSvyBd7F9ClfAnd9ihVLQFphZazWdc1GLViecpPPzibEhz_q9EI5suCkVqWuezLl5qEhwqynulWXJu3Cnmoka1khzVHP22K4PAW5XEtDmSwLx_yg0oC7PqQrc51f4BEjZ03YhluYP5ofSEc_WIoqXRfVxtQC1455jJTGD6PyW',
            width: 4032
        }
    ],
    place_id: 'ChIJm_91i5wx7YAR5dP9H8Ipo1s',
    plus_code: {
        compound_code: 'HVMH+GC Cambria, CA, USA',
        global_code: '847WHVMH+GC'
    },
    rating: 4.8,
    reference: 'ChIJm_91i5wx7YAR5dP9H8Ipo1s',
    reviews: [
        {
            author_name: 'Brendan Kiely',
            author_url: 'https://www.google.com/maps/contrib/117523430071286784872/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gj7KvkJM4cEBPs6_ggbLHMg9PrRziKGDaJEAX1_NDk=s128-c0x00000000-cc-rp-mo-ba8',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'Leffingwell Landing Park is a nice park to visit along the central coast. It is a small park but has walking trails along the shoreline, and great coastal cliff views. Well worth a pitstop if driving up Hwy 1.',
            time: 1630995792
        },
        {
            author_name: 'Judy Ulloa',
            author_url: 'https://www.google.com/maps/contrib/100084721370648586490/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gi4D0Ncvv9rbu4B3qeAuL-nO89I-tdYsmE_obI12HM=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'Loved it, listening to the waves so relaxing. Just definately somewhere to being kids',
            time: 1631235500
        },
        {
            author_name: 'John Amador',
            author_url: 'https://www.google.com/maps/contrib/111289465704364340442/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJxEK0Yi7r0brhtz5nirbQBMefKk1JqxkAIEH-hc=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: 'a month ago',
            text: 'They have great views and we always go there',
            time: 1635406512
        },
        {
            author_name: 'Michael Rochin Jr',
            author_url: 'https://www.google.com/maps/contrib/109692175863253365172/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJxXD_D-4vbTHOn-RHZ8sNhH8gaONE_eIshF9deG=s128-c0x00000000-cc-rp-mo-ba3',
            rating: 4,
            relative_time_description: '5 months ago',
            text: 'Great ocean views. Nice stroll with shading trees and the smells of the ocean. Beautiful',
            time: 1627001434
        },
        {
            author_name: 'Aileen Rae',
            author_url: 'https://www.google.com/maps/contrib/100216261217295411412/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJwwViP9ji-NODxHrdB-ftyEvyeQnfrfArdNz7SK=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 5,
            relative_time_description: '4 months ago',
            text: 'Beautiful little bay & launch ramp studded with old twisted cedars with nice walkways.  Clean restrooms.',
            time: 1628958915
        }
    ],
    types: [
        'park',
        'tourist_attraction',
        'point_of_interest',
        'establishment'
    ],
    url: 'https://maps.google.com/?cid=6603167392392401893',
    user_ratings_total: 276,
    utc_offset: -480,
    vicinity: 'Moonstone Beach Dr &, California 1, Cambria'
};

export const PLACE_API_RESULT_SAMPLE_2 = {
    address_components: [
        { long_name: '17645', short_name: '17645', types: [Array] },
        {
            long_name: 'California 160',
            short_name: 'CA-160',
            types: [Array]
        },
        { long_name: 'Rio Vista', short_name: 'Rio Vista', types: [Array] },
        {
            long_name: 'Sacramento County',
            short_name: 'Sacramento County',
            types: [Array]
        },
        { long_name: 'California', short_name: 'CA', types: [Array] },
        { long_name: 'United States', short_name: 'US', types: [Array] },
        { long_name: '94571', short_name: '94571', types: [Array] },
        { long_name: '9713', short_name: '9713', types: [Array] }
    ],
    adr_address: '<span class="street-address">17645 CA-160</span>, <span class="locality">Rio Vista</span>, <span class="region">CA</span> <span class="postal-code">94571-9713</span>, <span class="country-name">USA</span>',
    business_status: 'OPERATIONAL',
    formatted_address: '17645 CA-160, Rio Vista, CA 94571, USA',
    formatted_phone_number: '(916) 777-6671',
    geometry: {
        location: { lat: 38.11021019999999, lng: -121.696818 },
        viewport: { northeast: [Object], southwest: [Object] }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png',
    icon_background_color: '#4DB546',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet',
    international_phone_number: '+1 916-777-6671',
    name: 'Brannan Island State Recreation Area',
    photos: [
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDXpu-ncFvhTfw8cgeTahIGp2Esq35LcBCjTkxV9jaX2VL1h_2LZ0c_YkL2WmEYtFzm_wUrgdL-E2c-GIYZs7H1JuF2a2C6EI_zcYb_gNT5SSfBNJAonzX0svwQ8zDGnO79wuxjsiImEewaFJBdgi8hCEk17dviCCXS15p6E4bzR0AV',
            width: 4032
        },
        {
            height: 3036,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDAsG7iWa9CC59qQjG6RKyDioSxnkxxQfzKPQZY9XwNzfgOb_4Qp_P8BqFYhNK2vQcpYEQHzWfIZfNttkMg2BHRPJw-dc_1BOYrb_3KhpXAQt-hBJR8-x3R_zYWYpeYhfNwfb12XthYCjE6EQnarr32xSJcqHAnwkJVYE8KLNJY7rGa',
            width: 4048
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBNeHaF6hFoolFFR9sGH0gUCuzZodW-YUCZkRtyElLEcfMzNkZkuCIn_cCIvQH0Ov_yRd226mpczIyF5nzwirC-AnHgmzCYtYbYJ7uzQeYXDC7kbXYll8XFXHpV0Rnc_WIjleks1iWRnahrQAfdsA95yCTL5n3Hogo6RbMDfQdPokhX',
            width: 4032
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAzNomuIcBVRbLFEwqCgWN5cku_9OA1UjisUX57tK5_4KuC7yoLjN3E5cK33piLn5V3V10ifO6IN1xHWQzJmCDOxUUnr6kaHRsLaZeNJS-IXPoGuQ3lJeL83BYy7OjjWyaTrIRvtn9Xm-r-3Q2lsaY42JQu7QG-Edh6kf1pAr2GbCyE',
            width: 4032
        },
        {
            height: 1196,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDq6qC7Xi1F769C8olFdINRX50WxP6iE1X3hR7QUn9RNcIjpIyik8_YtM0WTcrDEeKc5Hw755QovTIAP4Lu5nt96dWN_mX6qLi1vi8OZXJMeEEKZ4xsF1Sr0Ns3WVEPh0kg1kGtUBgcbYT7WbWcMAE0e1acQP0X3qFlMTcW1PfhSi6N',
            width: 1001
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uECEqD8P7socCQmdz-_z2y3G-8-JiCn3qtUY9hcnaXD3rysP7KbM_LP6VVX6CQ7uQdzdkfqFdl9TBpuipKxuj5LfGixdqoslVw0gHqoUXQRwGpXbRopebdhuUVv-Mkbh-PQnieLuuul0N717JTvxpULfBda69SNhcrwvYtVdVq552nsa',
            width: 4032
        },
        {
            height: 2448,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDEWY9cDgYMONw599_lpbJVzp8-saUBHS0WwCwbEbPhU_5PzQ--0g8S3otJy-N2HB0SZLqNOsstDZNNj7jx0EYxE_ktkH4JNs1rAdk8kh4VMVhiiH2YPJ-ykudd2vP-RYAcgDd_e6G4eEamUBI4_0P25wb1BmKKFODLOpGtwQXTJC3A',
            width: 3264
        },
        {
            height: 1440,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDqWe-a50f4KoLYEVUVnVInhNb0xLySXQf6DRbtdc_tBafAY85YgF-99s-4jUXosjyFU4QW-Kg3WETfEnMFIAWwo7F9lK_uDg0yS4zyBnyQgy0q8gqXsaUpLhsTmerLN_pqetjJ3R-oTo0oWHsyxdIobPQNOMFhs71XVIaCaH2jNPdl',
            width: 2560
        },
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBTqA43wOem0ST-xjnFNPJPOu29sle0QEllaea0zMQEgF6zstf-p4rv6gIZedzjjGLFzDM_S0OGF4AH_Fmp5NiqyPSGGfqS0sIjT7z_nFYPEeDhdluXMzJumqvFtJAHrTRhguRTq33BdQd2xie_7A1zQRAsSA8687RGF7OClmJxkMMw',
            width: 4032
        },
        {
            height: 2268,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAgZPaaPNaWJ8OCnQR5YMegnbiZKyXMG84cb6JqSlamX0iTp_PIncUgPoPfUL_5TlEJCIBYWIpDjVyCUezXiQ7IUbgKUwM8x8NR9HwuTI8be4ToyY8_uejuyilLhc4XGDPrTUgh9EylQQ3NXzEuMsB1pThBl0N_RufM4w83BHXKS0K4',
            width: 4032
        }
    ],
    place_id: 'ChIJLekBIUlShYARdV64Jo81VfY',
    plus_code: {
        compound_code: '4863+37 Rio Vista, CA, USA',
        global_code: '84CW4863+37'
    },
    rating: 4.1,
    reference: 'ChIJLekBIUlShYARdV64Jo81VfY',
    reviews: [
        {
            author_name: 'Terry Kosta',
            author_url: 'https://www.google.com/maps/contrib/100841638298819253896/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJwV54S1O9t2DuwE2c_H8NMfmlsbl2XV2u3UOfdr=s128-c0x00000000-cc-rp-mo-ba2',
            rating: 5,
            relative_time_description: '4 months ago',
            text: "I love this park. The staff are so nice and helpful. Great fishing, camping and awesome large day park. It's beautiful scenery and always a clean park. Great for children.",
            time: 1629875332
        },
        {
            author_name: 'Ben',
            author_url: 'https://www.google.com/maps/contrib/107278321851918578366/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GiFEBwXt99fssh_FnwYGY0nv3ojFPpoiNE4-doswA=s128-c0x00000000-cc-rp-mo-ba3',
            rating: 5,
            relative_time_description: 'in the last week',
            text: 'The park is great, the bay area people who flock to it are not... Karen Central.\n' +
                'But again, the actual campground is great',
            time: 1640122778
        },
        {
            author_name: 'M. Sunshine Starchild',
            author_url: 'https://www.google.com/maps/contrib/103251998642416031876/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GgiMLp6NOP_Ps5jcPkll9-0Mv7OHsYK0KPQmwPNOA=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'We booked a mid-week camping trip that was perfect. The campsite was relatively empty which made social distancing easy. The staff was friendly and very helpful. We will definitely be going back in the future.',
            time: 1630259297
        },
        {
            author_name: 'Colleen Laurens Nelson',
            author_url: 'https://www.google.com/maps/contrib/106231152222053559900/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GgDIQWUjJZ_U3ZD5njyNc0QsHTZjrJDEqDMeD5W=s128-c0x00000000-cc-rp-mo',
            rating: 3,
            relative_time_description: '3 months ago',
            text: "The campground is maintained fairly well. The showers are okay and they are quarter pay, usually 4 or 5 quarters is good.  The only thing I don't really like about Brannan Island. campground is that\n" +
                'It is not wooded enough. There is not enough shade in the actual campsites. In the really hot days of summer your campsite is pretty much in full sun.',
            time: 1630083316
        },
        {
            author_name: 'Joe Jiu',
            author_url: 'https://www.google.com/maps/contrib/117302078215349453764/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJxCHeai7MLc0dltNHZ24-eQ9OVfBPOhBY8VrQR0=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'Great place and nice people. I reserved a small site for my big fifth wheel. Manager Chris with the other kind man helped and guided me on site to place the RV in a perfectly fitting position. Being there more than a week, Saw Chris and his team were working hard to keep the campground clean and order as I jogged there every day. Especially on weekends, Chris sometimes helped at entrance and help customers on sites as well. I had an Amazon order which were delivered to me by Chris in person nearly getting dark, maybe he just finished his long day.',
            time: 1631225792
        }
    ],
    types: [
        'tourist_attraction',
        'park',
        'point_of_interest',
        'establishment'
    ],
    url: 'https://maps.google.com/?cid=17750152395296890485',
    user_ratings_total: 1030,
    utc_offset: -480,
    vicinity: '17645 California 160, Rio Vista',
    website: 'http://www.parks.ca.gov/?page_id=487'
};
export const PLACE_API_RESULT_SAMPLE_3 = {
    address_components: [
        {
            long_name: 'Branscomb Road',
            short_name: 'Branscomb Rd',
            types: [Array]
        },
        { long_name: 'Branscomb', short_name: 'Branscomb', types: [Array] },
        {
            long_name: 'Mendocino County',
            short_name: 'Mendocino County',
            types: [Array]
        },
        { long_name: 'California', short_name: 'CA', types: [Array] },
        { long_name: 'United States', short_name: 'US', types: [Array] },
        { long_name: '95417', short_name: '95417', types: [Array] }
    ],
    adr_address: '<span class="street-address">Branscomb Rd</span>, <span class="locality">Branscomb</span>, <span class="region">CA</span> <span class="postal-code">95417</span>, <span class="country-name">USA</span>',
    business_status: 'OPERATIONAL',
    formatted_address: 'Branscomb Rd, Branscomb, CA 95417, USA',
    formatted_phone_number: '(707) 247-3318',
    geometry: {
        location: { lat: 39.6462166, lng: -123.6182765 },
        viewport: { northeast: [Object], southwest: [Object] }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png',
    icon_background_color: '#4DB546',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet',
    international_phone_number: '+1 707-247-3318',
    name: 'Admiral Standley State Recreation Area',
    opening_hours: {
        open_now: false,
        periods: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
        ],
        weekday_text: [
            'Monday: 8:00 AM – 7:30 PM',
            'Tuesday: 8:00 AM – 7:30 PM',
            'Wednesday: 8:00 AM – 7:30 PM',
            'Thursday: 8:00 AM – 7:30 PM',
            'Friday: 8:00 AM – 7:30 PM',
            'Saturday: 8:00 AM – 7:30 PM',
            'Sunday: 8:00 AM – 7:30 PM'
        ]
    },
    photos: [
        {
            height: 2880,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAFU6QYW8upnmgYKeBr2qMStBxlnFpjAURElkWz2zAyJaQNIGdOqMAifs8yCF8Y9LM3vi3jb_AcqAW31z_XnqYkWZKprPoUq6Tjl1Ep0PFNeU0fQarqqP6Jg-2xgzboG59bMfwUEh3X1iayiildoKrno6kfxo3UpH1M0HHa-BFGAHqL',
            width: 2160
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEC-jXuMlYKlUyfNSILfFSVC2UY2h1DUqobiMDdoJvIYXZ_OxJz-WdjcXLkdRCWsRUI88fEjj-jG3BMTbncJWbBxI1L_n0OUVr4Iroc1cA6mP_5Qrn7_ZtvK8-TOFcn_ZAlleiVpFzU0w3ugG-lBQRAkl1c-YoDmi3s9U7qnF6ExCJg',
            width: 3024
        },
        {
            height: 4624,
            html_attributions: [Array],
            photo_reference: 'Aap_uEA6XdZKayDFLOnybgz1kMY0YQByrSioefn7GmvKwK3-F46YueKxwZp1FyHIuvzysCBop8NXfb9yuFtZdtrAAcHPxZjavevWT4je2zbzkHZ3BZWUU42PW9_uCaQ8N_s4D3N28f1hhFFZRrDizAvB5-FLszo-5FGhK2p_xrGYn8SdFEAk',
            width: 5209
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uECYoUVS0teLUvSiAwjJ-H8ih3H_EU_MEaZjg_Gk_fm4iLAf0y5eUwM7sZmNOIYlmL2p3szKVXBYiK3Vi-LCmeSq1hpqrqf0ep8w8R6NqmBtEu6kadgyjE-jnHEk_FjUTB0GwED9J1VgnprQhpZKo7N-1g7ydWAmUrO7x8ig6DrjzYiA',
            width: 4032
        },
        {
            height: 3264,
            html_attributions: [Array],
            photo_reference: 'Aap_uECYvupNSOWz7pHUdyUFwspO-rfHTroVvQfztWQtMOCGt84hgB6gIyueoSGMwVM8YZG5mOL-m6pW0CDYCS8QspeTzkIIBD4_o0Y9WeyPHE8rUeLurJpuyXtsf1czkeaKM8aM-PygZbRjXWdWZQOS-9eRviygOVTLyWqdK0A1KNTNoAhE',
            width: 1836
        },
        {
            height: 4032,
            html_attributions: [Array],
            photo_reference: 'Aap_uED3F5bUYJv84EGQyD_c8iK68FELv1RiErFGlr8vqJyF7loTId7S8q-PtSedBC03OP5FbHHkf717GWUCdKDXgDH38PxEYPhrjoWpc-LA1KlDpHqSN1tL0mNkrd7enBlH8yoLfDJ507LNW_wCdK1TXRR6RwBQrxaMDU0-r6l6A797uskv',
            width: 3024
        },
        {
            height: 2880,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDPHgJyd9DzslVHZZIPmXKyw0XG02KRD8luOl58X-aea8v4YUkAD49E4-G1phXAu-LKkp5bMHv46cLqBMf6_CiRQ1budFFH_ngmH0P17n5wjy5IKzh5bL_5FsysUxWOvqmUETcsNhyl-lXNIjJmpWGeXV-GMiJcrxGF7WBlNigl4BMY',
            width: 2160
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBs6_ZSN3k2RfR7Hu74iokUD_B3iUnAfBMHjnQhtGuKV61e6O6kfbao0antlCOKk0NtptM5ZIHsV1MPVpXq2SUmzkuKeccnbN2qatvxSS1-BWI56zqRYXEtxx1jD8mE6Xv8ueBVHEcNOX9NMqrRDBPt94nPg_HHWsVKPtFRk7FnLJjX',
            width: 4032
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uECaXdu45a6dSiuB9w7V70ZkG171T3Uu8XDVdp7Er1oCgxw2Gk2SxCqy2_yeewlRj28_Oj1KEYNKHoreIyarVuYpcWNrzvoYf6RrPTmOPNaM6a-3mN5ulb9snFThfIo8dcB80q05RA19L59h1V3p3Q4H6cplq2DVWqYsJbMFwnU1pnjx',
            width: 4032
        },
        {
            height: 2880,
            html_attributions: [Array],
            photo_reference: 'Aap_uEAfVToeL_vQmmtmwlLa4Y8FsbkYkRYssChRfTnyT2mcWjMwemJhed-ApJpdUagJbQ7cPkTt6wOkgZzW9gwU9E6Ju2umNsEQ6zlyCAEd6rItLvTKJ5upJwEvCJlWkBGf-kw8OXXodQXEpyUxAeNQFQjMWHjQkiYudZFvpkaxWwNB7EHh',
            width: 2160
        }
    ],
    place_id: 'ChIJOaxhhgfQgYARGY7W7CjZTbE',
    plus_code: {
        compound_code: 'J9WJ+FM Branscomb, CA, USA',
        global_code: '84FRJ9WJ+FM'
    },
    rating: 4.3,
    reference: 'ChIJOaxhhgfQgYARGY7W7CjZTbE',
    reviews: [
        {
            author_name: 'Brad D',
            author_url: 'https://www.google.com/maps/contrib/106789603773984380950/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GhaJRFLFe_nPI6wTQFescA9MT_muyrY6hPE58F4=s128-c0x00000000-cc-rp-mo',
            rating: 4,
            relative_time_description: 'a week ago',
            text: "Not much to see here, it's mostly just redwood trees and some dirt roads. It gets four stars because the drive out from highway one was nice and it made for a great place to stop for a bit. Be careful though as it's a small, single lane road!",
            time: 1639358361
        },
        {
            author_name: 'Casey Russell',
            author_url: 'https://www.google.com/maps/contrib/117611568883359206829/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjjCDesdOxMpR1wB1HO73fxDsNadCRuuZZVBCv5Fg=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 1,
            relative_time_description: '3 years ago',
            text: "There's nothing there but a couple dozen big Redwoods. You can drive through the big trees on Branscomb Road, where they force the two lanes into one, but that's it. If you turn onto one of the dirt roads on either side of Branscomb Road, you will almost immediately be on private property.\n" +
                "The S.F. Chronicle rated this as the least visited Park in California by social media attention. There are two reasons in my opinion: there's not much there there, and there's absolutely no cell service. Enjoy!",
            time: 1537353456
        },
        {
            author_name: 'Matthew McKinnon',
            author_url: 'https://www.google.com/maps/contrib/103359108975458359228/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gil0e5YBE3fxGxh8C5lUoKhlWuYWDHvRIz4v5AbcA=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: '2 years ago',
            text: "Small, quiet, untrampled and I saw a bear. I didn't need a big show or cell service.  Wonderful!!",
            time: 1558928384
        },
        {
            author_name: 'Jolene Wilson',
            author_url: 'https://www.google.com/maps/contrib/107727726082020751379/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJzcslX8HDUb9cxFwi1A-JutRurX0_PQTg2dqOqP=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 5,
            relative_time_description: 'a year ago',
            text: 'Very beautiful big redwood trees. A must see its just a little overgrown though.',
            time: 1580163974
        },
        {
            author_name: 'Curtis Tyler',
            author_url: 'https://www.google.com/maps/contrib/111882621693174346283/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjUkKFhDLm-mCNJ5qoBAAV-ZNMKG3BOyUSZMk3W=s128-c0x00000000-cc-rp-mo-ba5',
            rating: 4,
            relative_time_description: '4 years ago',
            text: 'Just a nice place to heck out some old growth trees and be alone.',
            time: 1486663529
        }
    ],
    types: [
        'park',
        'tourist_attraction',
        'point_of_interest',
        'establishment'
    ],
    url: 'https://maps.google.com/?cid=12776106487715368473',
    user_ratings_total: 18,
    utc_offset: -480,
    vicinity: 'Branscomb Road, Branscomb',
    website: 'http://www.parks.ca.gov/?page_id=424'
};
export const PLACE_API_RESULT_SAMPLE_4 = {
    address_components: [
        { long_name: '3801', short_name: '3801', types: [Array] },
        {
            long_name: 'Saint Helena Highway',
            short_name: 'St Helena Hwy',
            types: [Array]
        },
        { long_name: 'Calistoga', short_name: 'Calistoga', types: [Array] },
        { long_name: 'California', short_name: 'CA', types: [Array] },
        { long_name: 'United States', short_name: 'US', types: [Array] },
        { long_name: '94515', short_name: '94515', types: [Array] },
        { long_name: '9652', short_name: '9652', types: [Array] }
    ],
    adr_address: '<span class="street-address">3801 St Helena Hwy</span>, <span class="locality">Calistoga</span>, <span class="region">CA</span> <span class="postal-code">94515-9652</span>, <span class="country-name">USA</span>',
    business_status: 'OPERATIONAL',
    formatted_address: '3801 St Helena Hwy, Calistoga, CA 94515, USA',
    formatted_phone_number: '(707) 942-4575',
    geometry: {
        location: { lat: 38.5429637, lng: -122.5374817 },
        viewport: { northeast: [Object], southwest: [Object] }
    },
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png',
    icon_background_color: '#4DB546',
    icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet',
    international_phone_number: '+1 707-942-4575',
    name: 'Bothe-Napa Valley State Park',
    opening_hours: {
        open_now: false,
        periods: [
            [Object], [Object],
            [Object], [Object],
            [Object], [Object],
            [Object]
        ],
        weekday_text: [
            'Monday: 8:00 AM – 8:00 PM',
            'Tuesday: 8:00 AM – 8:00 PM',
            'Wednesday: 8:00 AM – 8:00 PM',
            'Thursday: 8:00 AM – 8:00 PM',
            'Friday: 8:00 AM – 8:00 PM',
            'Saturday: 8:00 AM – 8:00 PM',
            'Sunday: 8:00 AM – 8:00 PM'
        ]
    },
    photos: [
        {
            height: 1362,
            html_attributions: [Array],
            photo_reference: 'Aap_uECWk5x5kQWA9LcvbLyDfMlNWD_H7mI-vG3mKM2vx330t1AMGQTnzn3byb2ohK7xsU-ve2YP3V2wC-IzhNHbshd_gOgqOwJmn9PEfoWnwSaY3hOk0wMGP5yvys9k0HtqdjBP0jdWXebq51Cioi_EMbvYrkkIhGk39v3BoqAf5my4G5vh',
            width: 2048
        },
        {
            height: 2707,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBEMWRrLiKYS7rqfoppDcjmOg7Q-fVPXkhyfn6HdYLsqQ3O8HSvk032pbNxyPJGVjhseZepauAetXI4H07tmivndCHd52Og2q6bJR7N9lcnSQl0q_2G6MJD6iSFG2VT8EVd6-Vi7CZe058Ykx7uJu1lIe14XQ1oQTmluBOJC36oqZzd',
            width: 4048
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uECk_vsOIj0dj7_UBtGJ--tARTgMlroOEZhQ11SlGyIzVQ8Ln_12Ntyp5Ky1z3HfCDjp2CpC6Gu_cROVBDUGL8ArHJQJXfEV503_XvDpU3L6qQuEbPUJ_a8aMZ-2BmwMlCma_xWSt3X78lW_xawF2_ItDIEuStqtyj7phoXkWyscGSFx',
            width: 4032
        },
        {
            height: 2988,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDbVWYtN_VHmykfGrLpLA0xIAOJg7fXxQdMv9Uz9ltcnrasxkSeQj_caFUb3-KRUjv9QPKzSsfr5JZD11S--Y0d2fcBZFvk4ZfUOUHTrQMD4oJlMCiyn-iYp6ocxsA6bsqv3wkylW-DC2f7OeMwgMqOE6t8BKTESFcpn_k81iSOyT6X',
            width: 5312
        },
        {
            height: 3072,
            html_attributions: [Array],
            photo_reference: 'Aap_uEC3J1dqmfpzVoJlqz3Eq8Mce7TdrW0U3WZril8mQTBAnfG1l4zhubvmTf67F1Tn9jbRt0opgvyX_VcCi-De1QfAXHdOGRNEFKxVQ-NiPkQWey2KMgPhz4FzAVedh-nMnHFtdouwiD_hVVhhNN6oDF35VGAtkm9H1DbhhhRabzWxGwf2',
            width: 4096
        },
        {
            height: 4032,
            html_attributions: [Array],
            photo_reference: 'Aap_uECXl1I_H428qNVbrkjkzGmAV2WCcNCJSekXKa2MLyRxzRzfZNM8jSwQLF9Afu1_LUb4CWoDNHqHA_qIi5FbJ3zN7Ru34OJUd5IgkpP8Se10Qf40k3RYHgPKp_pCQkwaLFV0GgBUiaHirsIE22CzSfWskuNrXqttHUXa-A21CgZp9fT1',
            width: 3024
        },
        {
            height: 4608,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDSwCrEZaj-3RW-it2iFbt672el7X0eqOI7S5Q7DMiTr0RGBkS_QLUZMgbgLapz59eEBdeDG-JfL-fxkgne-je5hKyXQuU1u9OMDcGZ1TKxM0RhUP7xogOKCvuN1b3DO0CtWShRacnj5T7sQfeeWHjD5sR1qJlTg5mbimlSw7Kgcr63',
            width: 3456
        },
        {
            height: 3492,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDaV6j8S-8RPzSKI70Jj0WMbN88dJmPfEZbGP3zCVORpaz3W1SVTJBFqpKfyI8iiVM8s11r_5JzcqSL4rI7S9svtdbv4tKq0xNf0259pcQFLNFrZIb3w8eUuBVSyMHuDOgquSDyV18KZHomgfWqIg_YBIZxzVTkxlYWsyCrofAak_Kk',
            width: 4656
        },
        {
            height: 3024,
            html_attributions: [Array],
            photo_reference: 'Aap_uEBlszXCxclsBNoXakC1mw24f1Px3Wok2sBcvRBlB_sJ_-yFaazLTupD_N0cU7p0i5Xq0y3xl6QdE04ndbvLIo6P9CqUmAy9RoLbgH3SzsiNHhBIL_lP9-B58ypfT8_SXC2JUinrFklB86XDgwtkrg_KRGuiJq7KMtr6GqSfF0V9mmow',
            width: 4032
        },
        {
            height: 4608,
            html_attributions: [Array],
            photo_reference: 'Aap_uEDgYnJrBkrJ9hR9PFIQxeGgzGlqr6-NMdM0XKCKrIRCSg3kaR_dqNoA5_WRlB3zcbIBrXrJkz8bDc0fYslhMNS_sEzrP066pq5VNttnjIN20HyTxXKZ-l00iX2OuoHkQ9iIXVC_NAziJ2PmsB7yyzPY5r8k-hFvZkOh2OzTLMtT52H7',
            width: 3456
        }
    ],
    place_id: 'ChIJbQGcFDlbhIARoJbcIBQZqkU',
    plus_code: {
        compound_code: 'GFV7+52 Calistoga, CA, USA',
        global_code: '84CVGFV7+52'
    },
    rating: 4.6,
    reference: 'ChIJbQGcFDlbhIARoJbcIBQZqkU',
    reviews: [
        {
            author_name: 'Pamela Hoover',
            author_url: 'https://www.google.com/maps/contrib/103822807325781296440/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a/AATXAJxfqE8KnCDBqQvpb25SpeMU_hcm9oDa7BA1HA0j=s128-c0x00000000-cc-rp-mo-ba5',
            rating: 5,
            relative_time_description: '2 months ago',
            text: `Bothe State Park is Located at 3801 St Helena Highway in North Calistoga California off of Highway 29. My Youngest Daughter wanted to see the Fall Foliage, where the tree leaves were starting to turn red. I googled and found this amazing place, I am so grateful that the Glass Fire in 2020 didn't completely destroy this Gem, it cost 8.00 dollars to park, There is a posted sign that tells you how to pay for your parking, and No Dogs are Allowed in the Park, Because of The Nocturnal wild animals that live in the Park. Thank the Lord we didn't encounter any 😂. There are bathrooms and places to camp or just have a picnic. Because of the fire that forced the Parks closure many of the buildings and and the swimming pool are closed or in disrepair and are closed off. However there is still such a serene beauty here, steeped in rich history. The pictures doesn't do it justice, You must see it for yourself. God willing we will be back and hike the upper level of this amazing Park. I Pray that there will be "NO MORE FIRES"! Please Enjoy the Pictures, And Come Out with your families and friends hike, camp or just enjoy the Day. 🤗🤗`,
            time: 1634073201
        },
        {
            author_name: 'Ashley',
            author_url: 'https://www.google.com/maps/contrib/101466892140653223885/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14Gj2iabW6Wg0ONHHBv4lmyPZ9Fzimj93B7XJiHpAwDU=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 3,
            relative_time_description: '4 months ago',
            text: "There was a super friendly staff girl who checked me in who was absolutely helpful and friendly, the rest of the experience was very so so, I just didn't like it since the rangers were constantly eyeballing me (if something is wrong tell me instead of giving me dirty looks? or maybe that's just the vibe? I'm not sure but I didn't not personally like it) plus you pay 40 to camp and then have to pay for the showers, which is due to California not funding the state parks for whatever reason but I just didn't like the set up or the company. That being said I'm sure if you have a very large group or family this would be the perfect cafe for you",
            time: 1627865434
        },
        {
            author_name: 'Roger W. Doering',
            author_url: 'https://www.google.com/maps/contrib/113299561139870313657/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GgqTRL94PVMHlP1yHBRNWEtcxwLYECMsPW71kZ17w=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 4,
            relative_time_description: '2 months ago',
            text: 'Lovely state park, now being managed by the county. Good hiking. Close to lots of roads with bicycle paths. Many nearby wineries. No RV hookups or dump station.',
            time: 1634412147
        },
        {
            author_name: 'Katera Forbes',
            author_url: 'https://www.google.com/maps/contrib/112851210150296253751/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GignHmLwh_qhSnnK5eyCbFa5a_nJGHohAYp304R=s128-c0x00000000-cc-rp-mo-ba2',
            rating: 5,
            relative_time_description: '2 weeks ago',
            text: 'Fantastic facility and sites are fairly spacious.  The trails are very well maintained as well.',
            time: 1638750525
        },
        {
            author_name: 'Deborah Hendrickson',
            author_url: 'https://www.google.com/maps/contrib/114156300384625221285/reviews',
            language: 'en',
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GiXeMk6r3y7Z7DQv0ZZggiV3B6vVPCFk05svG67iQ=s128-c0x00000000-cc-rp-mo-ba4',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'Great tent campsite with newer bathrooms and showers. Lots of space between campers. Easy biking and hiking. Only downside is no electricity.',
            time: 1631663414
        }
    ],
    types: [
        'tourist_attraction',
        'park',
        'point_of_interest',
        'establishment'
    ],
    url: 'https://maps.google.com/?cid=5019852308899206816',
    user_ratings_total: 607,
    utc_offset: -480,
    vicinity: '3801 Saint Helena Highway, Calistoga',
    website: 'https://napaoutdoors.org/parks/bothe-napa-valley-state-park/'
};