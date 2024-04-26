"use client"
import AppBar from "./components/AppBar"
import Box from "@mui/material/Box"
import MyDrawer from "@/app/components/MyDrawer"
import RightSide from "@/app/components/RightSide"
import InstagramPost from "@/app/components/InstagramPost"
import { images } from "./constants"
import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

const postsData = [
    {
        user: "abodi",
        image: images.me,
        time: "20h",
        verified: true,
        media: [
            images.arabpost1,
            images.arabpost2,
            images.arabpost3,
            images.arabpost4,
            images.arabpost5,
            images.arabpost6,
            images.arabpost7,
            images.arabpost8,
            images.arabpost9,
        ],
        likes: "18,123",
        caption: `في البداية سنتحدث عن أهم الأشياء ، ستجد أسفل هيكل السيارات الجديدة الأكثر أناقة نفس معدات التشغيل مثل سيارات AMG GLC العادية التي ظهرت لأول مرة في يوليو . ⁣
⁣
بالنسبة لـ سيارة لأداء العالي AMG GLC63 S E Performance تستمد قوتها من نظام هايبرد يجمع بين محرك 4 سلندر سعة لترين مع تيروب بقوة 469 حصان يعمل إلى جانبه محرك كهربائي بقوة 201 حصان ليصدر من عمل المحركين معاً قوة تصل إلى 671 حصان و 1,019 نيوتن متر من عزم الدوران ⁣
⁣
أما سيارة مرسيدس AMG GLC 43 كوبيه 2024 فتعتمد أيضاً على نظام هايبرد يجمع بين عمل محرك 4 سلندر تيربو ولكن بقوة تصل إلى 416 حصان ومعزز بمحرك كهربائي صغير يوفر دفعة مؤقتة تبلغ 13 حصان عند الحاجة ، يرسل كلاهما القوة إلى الأربعة عجلات من خلال ناقل الحركة AMG Speedshift من تسع سرعات خاص بشركة صناعة السيارات الألمانية ، وكلاهما لهما توجيه للمحور الخلفي مع نظام تعليق AMG Ride Control في مجموعة المواصفات القياسية .⁣
⁣
تصنف مرسيدس AMG سيارة GLC43 كوبيه على أنها تصل إلى سرعة 96 كم/س ( 60 ميل/س ) خلال 4,7 ثانية ، وتبلغ سرعتها القصوى المحددة الكترونياً 250 كم/س ⁣
⁣
أما مرسيدس GLC 63 كوبيه 2025 فتصل إلى سرعة 96 كم/س ( 60 ميل/س ) في 3,4 ثانية ، وتصل سرعتها القصوى إلى 275 كم/س ⁣
⁣
بهذه المعلومات الرسمية تكون سيارات AMG جديدة هذه قد تخلت عن محركات V6 و V8 لتعتمد على محرك 4 سلندر تيوب مع نظام هجين تواجه بها المستقبل الكهربائية .⁣
لم تصدر مرسيدس أي تفاصيل بخصوص الأسعار أو التوفر في الوقت الحالي⁣`,
    },
    {
        user: "abodi",
        image: images.me,
        time: "13h",
        verified: true,
        media: [images.profile2, images.profile4],
        likes: "151",
        caption: "Stay Focused",
    },
    {
        user: "abodi",
        image: images.me,
        time: "7h",
        verified: true,
        likes: "199",
        media: [
            images.profile5,
            images.profile6,
            images.profile7,
            images.profile8,
            images.profile9,
        ],
    },
    {
        user: "altayeb.kakhia",
        image: images.altayeb,
        time: "15h",
        verified: false,
        media: [images.profile9],
        likes: "354",
        caption: "",
    },
]
export default function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getLikers = async () => {
            const options = {
                method: "GET",
                url: "https://instagram28.p.rapidapi.com/media_likers",
                params: {
                    short_code: "CB_B4z_s-0r",
                    batch_size: "20",
                },
                headers: {
                    "X-RapidAPI-Key":
                        "a996ed8266msh5573f793551000cp109af3jsne1d2ceec2362",
                    "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
                },
            }

            try {
                const response = await axios.request(options)
                console.log(response.data)
                setUsers(response.data.users)
            } catch (error) {
                console.error(error)
            }
        }
        getLikers()
    }, [])

    return (
        <>
            <Container sx={{ px: "0", m: "0", mx: "auto" }}>
                {/* <MyDrawer  /> */}
                <Box
                    sx={{
                        margin: {
                            lg: "32px 0px 32px 140px",
                            sm: "16px 0px 16px 69px",
                        },
                        display: { md: "flex" },
                        flexGrow: "1",
                        width: {
                            xs: "100%",
                            sm: "calc(100% - 70px)",
                            lg: "calc(100% - 460px)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            mt: { xs: "65px", sm: 1 },
                            maxWidth: "100%",
                            position: "relative",
                            flexGrow: "1",
                            width: "100%",
                        }}
                    >
                        <AppBar users={users} />
                        {postsData.map((item, index) => (
                            <InstagramPost
                                key={index}
                                user={item.user}
                                image={item.image}
                                time={item.time}
                                verified={item.verified}
                                media={item.media}
                                likes={item.likes}
                                caption={item.caption}
                            />
                        ))}
                    </Box>
                    <RightSide />
                </Box>
            </Container>
        </>
    )
}
