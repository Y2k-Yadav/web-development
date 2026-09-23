import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    let data = {
        "matchDetails": [
            {
                "matchDetailsMap": {
                    "key": "Fri, 22 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89654,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "1st Match",
                                "matchFormat": "T20",
                                "startDate": "1711117800000",
                                "endDate": "1711065600000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 6 wkts",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 176,
                                        "wickets": 4,
                                        "overs": 18.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 173,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "adDetail": {
                    "name": "native_news_index_random_1",
                    "layout": "native_large",
                    "position": 1
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 23 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89661,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "2nd Match",
                                "matchFormat": "T20",
                                "startDate": "1711188000000",
                                "endDate": "1711152000000",
                                "state": "complete",
                                "status": "Punjab Kings won by 4 wkts",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                                    "city": "New Chandigarh",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 65,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 177,
                                        "wickets": 6,
                                        "overs": 19.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 174,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 89665,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "3rd Match",
                                "matchFormat": "T20",
                                "startDate": "1711202400000",
                                "endDate": "1711152000000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 4 runs",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 208,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 204,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 24 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89668,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "4th Match",
                                "matchFormat": "T20",
                                "startDate": "1711274400000",
                                "endDate": "1711238400000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 20 runs",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "Sawai Mansingh Stadium",
                                    "city": "Jaipur",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 193,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 173,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 89675,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "5th Match",
                                "matchFormat": "T20",
                                "startDate": "1711288800000",
                                "endDate": "1711238400000",
                                "state": "complete",
                                "status": "Gujarat Titans won by 6 runs",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 971,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 168,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 162,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 25 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89682,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "6th Match",
                                "matchFormat": "T20",
                                "startDate": "1711375200000",
                                "endDate": "1711324800000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 4 wkts",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 178,
                                        "wickets": 6,
                                        "overs": 19.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 176,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 26 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89689,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "7th Match",
                                "matchFormat": "T20",
                                "startDate": "1711461600000",
                                "endDate": "1711411200000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 63 runs",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 206,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 143,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 27 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89693,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "8th Match",
                                "matchFormat": "T20",
                                "startDate": "1711548000000",
                                "endDate": "1711497600000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 31 runs",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 277,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 246,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 28 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89700,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "9th Match",
                                "matchFormat": "T20",
                                "startDate": "1711634400000",
                                "endDate": "1711584000000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 12 runs",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Sawai Mansingh Stadium",
                                    "city": "Jaipur",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 185,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 173,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 29 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89703,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "10th Match",
                                "matchFormat": "T20",
                                "startDate": "1711720800000",
                                "endDate": "1711670400000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 7 wkts",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 182,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 186,
                                        "wickets": 3,
                                        "overs": 16.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 30 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89710,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "11th Match",
                                "matchFormat": "T20",
                                "startDate": "1711807200000",
                                "endDate": "1711756800000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 21 runs",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 199,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 178,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 31 Mar 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89717,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "12th Match",
                                "matchFormat": "T20",
                                "startDate": "1711879200000",
                                "endDate": "1711843200000",
                                "state": "complete",
                                "status": "Gujarat Titans won by 7 wkts",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 971,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 168,
                                        "wickets": 3,
                                        "overs": 19.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 162,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 89724,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "13th Match",
                                "matchFormat": "T20",
                                "startDate": "1711893600000",
                                "endDate": "1711843200000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 20 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "ACA-VDCA Cricket Stadium",
                                    "city": "Visakhapatnam",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 191,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 171,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 01 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89731,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "14th Match",
                                "matchFormat": "T20",
                                "startDate": "1711980000000",
                                "endDate": "1711929600000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 6 wkts",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 125,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 127,
                                        "wickets": 4,
                                        "overs": 15.3
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 02 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89738,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "15th Match",
                                "matchFormat": "T20",
                                "startDate": "1712066400000",
                                "endDate": "1712016000000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 28 runs",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 153,
                                        "wickets": 10,
                                        "overs": 19.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 181,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 03 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89745,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "16th Match",
                                "matchFormat": "T20",
                                "startDate": "1712152800000",
                                "endDate": "1712102400000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 106 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "ACA-VDCA Cricket Stadium",
                                    "city": "Visakhapatnam",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 166,
                                        "wickets": 10,
                                        "overs": 17.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 272,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 04 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89749,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "17th Match",
                                "matchFormat": "T20",
                                "startDate": "1712239200000",
                                "endDate": "1712188800000",
                                "state": "complete",
                                "status": "Punjab Kings won by 3 wkts",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 65,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 199,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 200,
                                        "wickets": 7,
                                        "overs": 19.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 05 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89752,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "18th Match",
                                "matchFormat": "T20",
                                "startDate": "1712325600000",
                                "endDate": "1712275200000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 6 wkts",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 166,
                                        "wickets": 4,
                                        "overs": 18.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 165,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 06 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89756,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "19th Match",
                                "matchFormat": "T20",
                                "startDate": "1712412000000",
                                "endDate": "1712361600000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 6 wkts",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Sawai Mansingh Stadium",
                                    "city": "Jaipur",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 189,
                                        "wickets": 4,
                                        "overs": 19.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 183,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 07 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 89763,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "20th Match",
                                "matchFormat": "T20",
                                "startDate": "1712484000000",
                                "endDate": "1712448000000",
                                "state": "complete",
                                "status": "Mumbai Indians won by 29 runs",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 62,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 234,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 205,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 89770,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "21st Match",
                                "matchFormat": "T20",
                                "startDate": "1712498400000",
                                "endDate": "1712448000000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 33 runs",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 163,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 130,
                                        "wickets": 10,
                                        "overs": 18.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 08 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91380,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "22nd Match",
                                "matchFormat": "T20",
                                "startDate": "1712584800000",
                                "endDate": "1712534400000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 7 wkts",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 141,
                                        "wickets": 3,
                                        "overs": 17.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 137,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 09 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91389,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "23rd Match",
                                "matchFormat": "T20",
                                "startDate": "1712671200000",
                                "endDate": "1712620800000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 2 runs",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                                    "city": "New Chandigarh",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 180,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 182,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 10 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91393,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "24th Match",
                                "matchFormat": "T20",
                                "startDate": "1712757600000",
                                "endDate": "1712707200000",
                                "state": "complete",
                                "status": "Gujarat Titans won by 3 wkts",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "Sawai Mansingh Stadium",
                                    "city": "Jaipur",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 971,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 196,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 199,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 11 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91398,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "25th Match",
                                "matchFormat": "T20",
                                "startDate": "1712844000000",
                                "endDate": "1712793600000",
                                "state": "complete",
                                "status": "Mumbai Indians won by 7 wkts",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 62,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 199,
                                        "wickets": 3,
                                        "overs": 15.3
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 196,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 12 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91407,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "26th Match",
                                "matchFormat": "T20",
                                "startDate": "1712930400000",
                                "endDate": "1712880000000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 6 wkts",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 167,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 170,
                                        "wickets": 4,
                                        "overs": 18.1
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 13 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91416,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "27th Match",
                                "matchFormat": "T20",
                                "startDate": "1713016800000",
                                "endDate": "1712966400000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 3 wkts",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                                    "city": "New Chandigarh",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 147,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 152,
                                        "wickets": 7,
                                        "overs": 19.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 14 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91420,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "28th Match",
                                "matchFormat": "T20",
                                "startDate": "1713088800000",
                                "endDate": "1713052800000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 8 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 162,
                                        "wickets": 2,
                                        "overs": 15.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 161,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91425,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "29th Match",
                                "matchFormat": "T20",
                                "startDate": "1713103200000",
                                "endDate": "1713052800000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 20 runs",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 186,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 206,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 15 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91434,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "30th Match",
                                "matchFormat": "T20",
                                "startDate": "1713189600000",
                                "endDate": "1713139200000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 25 runs",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 262,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 287,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 16 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91443,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "31st Match",
                                "matchFormat": "T20",
                                "startDate": "1713276000000",
                                "endDate": "1713225600000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 2 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 223,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 224,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 17 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91452,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "32nd Match",
                                "matchFormat": "T20",
                                "startDate": "1713362400000",
                                "endDate": "1713312000000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 6 wkts",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 89,
                                        "wickets": 10,
                                        "overs": 17.3
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 92,
                                        "wickets": 4,
                                        "overs": 8.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 18 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91461,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "33rd Match",
                                "matchFormat": "T20",
                                "startDate": "1713448800000",
                                "endDate": "1713398400000",
                                "state": "complete",
                                "status": "Mumbai Indians won by 9 runs",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                                    "city": "New Chandigarh",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 62,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 183,
                                        "wickets": 10,
                                        "overs": 19.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 192,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 19 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91470,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "34th Match",
                                "matchFormat": "T20",
                                "startDate": "1713535200000",
                                "endDate": "1713484800000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 8 wkts",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 180,
                                        "wickets": 2,
                                        "overs": 19
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 176,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 20 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91474,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "35th Match",
                                "matchFormat": "T20",
                                "startDate": "1713621600000",
                                "endDate": "1713571200000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 67 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Arun Jaitley Stadium",
                                    "city": "Delhi",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 199,
                                        "wickets": 10,
                                        "overs": 19.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 266,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 21 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91479,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "36th Match",
                                "matchFormat": "T20",
                                "startDate": "1713693600000",
                                "endDate": "1713657600000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 1 run",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 222,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 221,
                                        "wickets": 10,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91488,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "37th Match",
                                "matchFormat": "T20",
                                "startDate": "1713708000000",
                                "endDate": "1713657600000",
                                "state": "complete",
                                "status": "Gujarat Titans won by 3 wkts",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                                    "city": "New Chandigarh",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 971,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 142,
                                        "wickets": 10,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 146,
                                        "wickets": 7,
                                        "overs": 19.1
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 22 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91497,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "38th Match",
                                "matchFormat": "T20",
                                "startDate": "1713794400000",
                                "endDate": "1713744000000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 9 wkts",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Sawai Mansingh Stadium",
                                    "city": "Jaipur",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 183,
                                        "wickets": 1,
                                        "overs": 18.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 179,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 23 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91506,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "39th Match",
                                "matchFormat": "T20",
                                "startDate": "1713880800000",
                                "endDate": "1713830400000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 6 wkts",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 210,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 213,
                                        "wickets": 4,
                                        "overs": 19.3
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 24 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91515,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "40th Match",
                                "matchFormat": "T20",
                                "startDate": "1713967200000",
                                "endDate": "1713916800000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 4 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "Arun Jaitley Stadium",
                                    "city": "Delhi",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 224,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 220,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 25 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91524,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "41st Match",
                                "matchFormat": "T20",
                                "startDate": "1714053600000",
                                "endDate": "1714003200000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 35 runs",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 171,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 206,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 26 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91528,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "42nd Match",
                                "matchFormat": "T20",
                                "startDate": "1714140000000",
                                "endDate": "1714089600000",
                                "state": "complete",
                                "status": "Punjab Kings won by 8 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 65,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 261,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 262,
                                        "wickets": 2,
                                        "overs": 18.4
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 27 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91533,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "43rd Match",
                                "matchFormat": "T20",
                                "startDate": "1714212000000",
                                "endDate": "1714176000000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 10 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Arun Jaitley Stadium",
                                    "city": "Delhi",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 257,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 247,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91542,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "44th Match",
                                "matchFormat": "T20",
                                "startDate": "1714226400000",
                                "endDate": "1714176000000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 7 wkts",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 196,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 199,
                                        "wickets": 3,
                                        "overs": 19
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 28 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91551,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "45th Match",
                                "matchFormat": "T20",
                                "startDate": "1714298400000",
                                "endDate": "1714262400000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 9 wkts",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 200,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 206,
                                        "wickets": 1,
                                        "overs": 16
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91555,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "46th Match",
                                "matchFormat": "T20",
                                "startDate": "1714312800000",
                                "endDate": "1714262400000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 78 runs",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 212,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 134,
                                        "wickets": 10,
                                        "overs": 18.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 29 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91564,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "47th Match",
                                "matchFormat": "T20",
                                "startDate": "1714399200000",
                                "endDate": "1714348800000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 7 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 157,
                                        "wickets": 3,
                                        "overs": 16.3
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 153,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 30 Apr 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91569,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "48th Match",
                                "matchFormat": "T20",
                                "startDate": "1714485600000",
                                "endDate": "1714435200000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 4 wkts",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 145,
                                        "wickets": 6,
                                        "overs": 19.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 144,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 01 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91578,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "49th Match",
                                "matchFormat": "T20",
                                "startDate": "1714572000000",
                                "endDate": "1714521600000",
                                "state": "complete",
                                "status": "Punjab Kings won by 7 wkts",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 65,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 162,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 163,
                                        "wickets": 3,
                                        "overs": 17.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 02 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91587,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "50th Match",
                                "matchFormat": "T20",
                                "startDate": "1714658400000",
                                "endDate": "1714608000000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 1 run",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 201,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 200,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 03 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91596,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "51st Match",
                                "matchFormat": "T20",
                                "startDate": "1714744800000",
                                "endDate": "1714694400000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 24 runs",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 145,
                                        "wickets": 10,
                                        "overs": 18.5
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 169,
                                        "wickets": 10,
                                        "overs": 19.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 04 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91600,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "52nd Match",
                                "matchFormat": "T20",
                                "startDate": "1714831200000",
                                "endDate": "1714780800000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 4 wkts",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 152,
                                        "wickets": 6,
                                        "overs": 13.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 147,
                                        "wickets": 10,
                                        "overs": 19.3
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 05 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91609,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "53rd Match",
                                "matchFormat": "T20",
                                "startDate": "1714903200000",
                                "endDate": "1714867200000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 28 runs",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "Himachal Pradesh Cricket Association Stadium",
                                    "city": "Dharamsala",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 139,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 167,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91618,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "54th Match",
                                "matchFormat": "T20",
                                "startDate": "1714917600000",
                                "endDate": "1714867200000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 98 runs",
                                "team1": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                                    "city": "Lucknow",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 137,
                                        "wickets": 10,
                                        "overs": 16.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 235,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 06 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91623,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "55th Match",
                                "matchFormat": "T20",
                                "startDate": "1715004000000",
                                "endDate": "1714953600000",
                                "state": "complete",
                                "status": "Mumbai Indians won by 7 wkts",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 62,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 174,
                                        "wickets": 3,
                                        "overs": 17.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 173,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 07 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91632,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "56th Match",
                                "matchFormat": "T20",
                                "startDate": "1715090400000",
                                "endDate": "1715040000000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 20 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "Arun Jaitley Stadium",
                                    "city": "Delhi",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 221,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 201,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 08 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91641,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "57th Match",
                                "matchFormat": "T20",
                                "startDate": "1715176800000",
                                "endDate": "1715126400000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 10 wkts",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 167,
                                        "overs": 9.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 165,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 09 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91645,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "58th Match",
                                "matchFormat": "T20",
                                "startDate": "1715263200000",
                                "endDate": "1715212800000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 60 runs",
                                "team1": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Himachal Pradesh Cricket Association Stadium",
                                    "city": "Dharamsala",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 181,
                                        "wickets": 10,
                                        "overs": 17
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 241,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 10 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91650,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "59th Match",
                                "matchFormat": "T20",
                                "startDate": "1715349600000",
                                "endDate": "1715299200000",
                                "state": "complete",
                                "status": "Gujarat Titans won by 35 runs",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 971,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 231,
                                        "wickets": 3,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 196,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 11 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91654,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "60th Match",
                                "matchFormat": "T20",
                                "startDate": "1715436000000",
                                "endDate": "1715385600000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 18 runs - 16 overs game - due to rain",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "venueInfo": {
                                    "ground": "Eden Gardens",
                                    "city": "Kolkata",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 157,
                                        "wickets": 7,
                                        "overs": 16
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 139,
                                        "wickets": 8,
                                        "overs": 16
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 12 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91663,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "61st Match",
                                "matchFormat": "T20",
                                "startDate": "1715508000000",
                                "endDate": "1715472000000",
                                "state": "complete",
                                "status": "Chennai Super Kings won by 5 wkts",
                                "team1": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 58,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 145,
                                        "wickets": 5,
                                        "overs": 18.2
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 141,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91668,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "62nd Match",
                                "matchFormat": "T20",
                                "startDate": "1715522400000",
                                "endDate": "1715472000000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 47 runs",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 187,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 140,
                                        "wickets": 10,
                                        "overs": 19.1
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Mon, 13 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91677,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "63rd Match",
                                "matchFormat": "T20",
                                "startDate": "1715608800000",
                                "endDate": "1715558400000",
                                "state": "complete",
                                "status": "Match abandoned without toss",
                                "team1": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "isTimeAnnounced": true
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 14 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91681,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "64th Match",
                                "matchFormat": "T20",
                                "startDate": "1715695200000",
                                "endDate": "1715644800000",
                                "state": "complete",
                                "status": "Delhi Capitals won by 19 runs",
                                "team1": {
                                    "teamId": 61,
                                    "teamName": "DELHI CAPITALS",
                                    "teamSName": "DC",
                                    "imageId": 860040
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "Arun Jaitley Stadium",
                                    "city": "Delhi",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 61,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 208,
                                        "wickets": 4,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 189,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 15 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91686,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "65th Match",
                                "matchFormat": "T20",
                                "startDate": "1715781600000",
                                "endDate": "1715731200000",
                                "state": "complete",
                                "status": "Punjab Kings won by 5 wkts",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "Barsapara Cricket Stadium",
                                    "city": "Guwahati",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 65,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 144,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 145,
                                        "wickets": 5,
                                        "overs": 18.5
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Thu, 16 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91690,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "66th Match",
                                "matchFormat": "T20",
                                "startDate": "1715868000000",
                                "endDate": "1715817600000",
                                "state": "complete",
                                "status": "Match abandoned without toss",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 971,
                                    "teamName": "GUJARAT TITANS",
                                    "teamSName": "GT",
                                    "imageId": 860068
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "isTimeAnnounced": true
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 17 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91699,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "67th Match",
                                "matchFormat": "T20",
                                "startDate": "1715954400000",
                                "endDate": "1715904000000",
                                "state": "complete",
                                "status": "Lucknow Super Giants won by 18 runs",
                                "team1": {
                                    "teamId": 62,
                                    "teamName": "MUMBAI INDIANS",
                                    "teamSName": "MI",
                                    "imageId": 860053
                                },
                                "team2": {
                                    "teamId": 966,
                                    "teamName": "LUCKNOW SUPER GIANTS",
                                    "teamSName": "LSG",
                                    "imageId": 882545
                                },
                                "venueInfo": {
                                    "ground": "Wankhede Stadium",
                                    "city": "Mumbai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 966,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 196,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 214,
                                        "wickets": 6,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sat, 18 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91704,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "68th Match",
                                "matchFormat": "T20",
                                "startDate": "1716040800000",
                                "endDate": "1715990400000",
                                "state": "complete",
                                "status": "Royal Challengers Bengaluru won by 27 runs",
                                "team1": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "team2": {
                                    "teamId": 58,
                                    "teamName": "CHENNAI SUPER KINGS",
                                    "teamSName": "CSK",
                                    "imageId": 860038
                                },
                                "venueInfo": {
                                    "ground": "M.Chinnaswamy Stadium",
                                    "city": "Bengaluru",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 59,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 218,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 191,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 19 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91713,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "69th Match",
                                "matchFormat": "T20",
                                "startDate": "1716112800000",
                                "endDate": "1716076800000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 4 wkts",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 65,
                                    "teamName": "PUNJAB KINGS",
                                    "teamSName": "PBKS",
                                    "imageId": 860084
                                },
                                "venueInfo": {
                                    "ground": "Rajiv Gandhi International Stadium",
                                    "city": "Hyderabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 215,
                                        "wickets": 6,
                                        "overs": 19.1
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 214,
                                        "wickets": 5,
                                        "overs": 20
                                    }
                                }
                            }
                        },
                        {
                            "matchInfo": {
                                "matchId": 91717,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "70th Match",
                                "matchFormat": "T20",
                                "startDate": "1716127200000",
                                "endDate": "1716076800000",
                                "state": "complete",
                                "status": "Match abandoned due to rain (with toss)",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "venueInfo": {
                                    "ground": "Barsapara Cricket Stadium",
                                    "city": "Guwahati",
                                    "timezone": "+05:30"
                                },
                                "isTimeAnnounced": true
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Tue, 21 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91722,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "Qualifier 1",
                                "matchFormat": "T20",
                                "startDate": "1716300000000",
                                "endDate": "1716249600000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 8 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 164,
                                        "wickets": 2,
                                        "overs": 13.4
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 159,
                                        "wickets": 10,
                                        "overs": 19.3
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Wed, 22 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91731,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "Eliminator",
                                "matchFormat": "T20",
                                "startDate": "1716386400000",
                                "endDate": "1716336000000",
                                "state": "complete",
                                "status": "Rajasthan Royals won by 4 wkts",
                                "team1": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "team2": {
                                    "teamId": 59,
                                    "teamName": "ROYAL CHALLENGERS BENGALURU",
                                    "teamSName": "RCB",
                                    "imageId": 860056
                                },
                                "venueInfo": {
                                    "ground": "Narendra Modi Stadium",
                                    "city": "Ahmedabad",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 64,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 174,
                                        "wickets": 6,
                                        "overs": 19
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 172,
                                        "wickets": 8,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Fri, 24 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91735,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "Qualifier 2",
                                "matchFormat": "T20",
                                "startDate": "1716559200000",
                                "endDate": "1716508800000",
                                "state": "complete",
                                "status": "Sunrisers Hyderabad won by 36 runs",
                                "team1": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "team2": {
                                    "teamId": 64,
                                    "teamName": "RAJASTHAN ROYALS",
                                    "teamSName": "RR",
                                    "imageId": 860055
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 255,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 175,
                                        "wickets": 9,
                                        "overs": 20
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 139,
                                        "wickets": 7,
                                        "overs": 20
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            },
            {
                "matchDetailsMap": {
                    "key": "Sun, 26 May 2024",
                    "match": [
                        {
                            "matchInfo": {
                                "matchId": 91740,
                                "seriesId": 7607,
                                "seriesName": "Indian Premier League 2024",
                                "matchDesc": "Final",
                                "matchFormat": "T20",
                                "startDate": "1716732000000",
                                "endDate": "1716681600000",
                                "state": "complete",
                                "status": "Kolkata Knight Riders won by 8 wkts",
                                "team1": {
                                    "teamId": 63,
                                    "teamName": "KOLKATA KNIGHT RIDERS",
                                    "teamSName": "KKR",
                                    "imageId": 860046
                                },
                                "team2": {
                                    "teamId": 255,
                                    "teamName": "SUNRISERS HYDERABAD",
                                    "teamSName": "SRH",
                                    "imageId": 860066
                                },
                                "venueInfo": {
                                    "ground": "MA Chidambaram Stadium",
                                    "city": "Chennai",
                                    "timezone": "+05:30"
                                },
                                "currBatTeamId": 63,
                                "isTimeAnnounced": true
                            },
                            "matchScore": {
                                "team1Score": {
                                    "inngs1": {
                                        "inningsId": 2,
                                        "runs": 114,
                                        "wickets": 2,
                                        "overs": 10.3
                                    }
                                },
                                "team2Score": {
                                    "inngs1": {
                                        "inningsId": 1,
                                        "runs": 113,
                                        "wickets": 10,
                                        "overs": 18.3
                                    }
                                }
                            }
                        }
                    ],
                    "seriesId": 7607
                }
            }
        ],
        "appIndex": {
            "seoTitle": "Indian Premier League 2024 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
            "webURL": "www.cricbuzz.com/cricket-series/"
        }
    }

    const [matchesData, setMatcheData] = useState([]);

    let filterData = data.matchDetails.filter(
        (singleMatch) => singleMatch["matchDetailsMap"],
    );

    async function FetchMatchData() {
        const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607";
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "e8a079b1a1mshbb599346d3f5166p13bca7jsn7530bdc30834",
                "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            let filterData = result.matchDetails.filter(
                (singleMatch) => singleMatch["matchDetailsMap"],
            );
            setMatcheData(filterData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        // FetchMatchData();
        setMatcheData(filterData)
    }, []);

    return (
        <div>
            {matchesData.map((data, i) =>
                data.matchDetailsMap.match.map((singleMatch) => (
                    <Link to={`/MatchDetails/${singleMatch.matchInfo.matchId}`}>
                        <h1 >
                            {singleMatch.matchInfo.team1.teamSName} {" vs "}
                            {singleMatch.matchInfo.team2.teamSName} {data.matchDetailsMap.key}{" "}
                            {singleMatch.matchInfo.status}
                        </h1>
                    </Link>
                )),
            )}
        </div>
    );
}

export default Home;
