/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东  账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = __jdu=16030514737191760624518; shshshfpa=e47e0148-98c0-ec8d-6b6b-24e113250bd4-1603051483; shshshfpb=c6tM9/siwnZdAZyg8LUI4Gg==; webp=1; mba_muid=16030514737191760624518; visitkey=3217159224309904; pinId=0tBxZ8Lj3Nw; pin=ccwei86; unick=ccwei86; _tp=k5lCKp8RRA8WWrOVP8W3zA==; _pst=ccwei86; _fbp=fb.1.1621616549361.334881955; retina=1; sc_width=360; qd_uid=KPGP6H1I-GXXGD3HZ4VQ45KLM6GW9; qd_fs=1622712591557; qd_ls=1622712591557; qd_ts=1622712591557; qd_sq=2; areaId=21; ipLoc-djd=21-1861-1863-27243; user-key=87284888-16d9-4a81-93ec-d221e7394fe7; cn=10; unpl=V2_ZzNtbUJVE0AhARFWfU5bB2JWRl4SXhNBIg4TA3McWVVmC0FYclRCFnUUR1NnGVwUZgMZXUdcRhFFCEdkexhdBGYCE1VAUHMVdw5EVXIpXAdhARNUclRDJXUJdlR8GF4EYwMXW0BRQx11DkFVfBpZAWcKIm1CX0clRVgOCiBHbAdgBhdaQlFKFkUJdlVLUjIEKgMVXEBWRxVwDkRSexFcA2ACFV5HU0McRQl2Vw==; __jdv=122270672|www.zuanke8.com|t_1000000936_137308|tuiguang|13ade8f37f634de2a8aef7df944a09b4|1623345286984; 3AB9D23F7A4B3C9B=6N76UNUG6KEP2I3UCSTZ76QPVBWHAHHFXUV4YH6NI23YR7NDEBNPRBY53PVLZT3HMTKNFKOGYLHQGP4Z6A56UR2Y3A; __jda=122270672.16030514737191760624518.1603051474.1623494554.1623567536.237; __jdc=122270672; wlfstk_smdl=e9nc64lo397546cix6oqs8zkqac1851n; TrackID=12p8S1Dfyg253jeciRLqJ8Yt21PW__1zlS7j6A8m2a1bVENmRv000ImHiC28TGHsrm1jnfV45t2lFYdbaMJwJpaVNmAO5jecjXI_ykAtP-S4; thor=C36D241E3741BD82D28314C8285F058559778E9F15B154E3F3ECC00C0422772DC3781C071BDCDAD0798773D1F602B586965903B8AB0D97E9B4BC69BD5BA923E3DBB3536C5FF956C9E9B045493BC9D225351C117AA0A6F723185FAB3943469E21B885BE1B4CCD118A8BBD87B5A8A5E5D599E66C6A8B4A9418F177DFFDF844006202170C5C9D399AB65703A3BA3AE5A1C3; ceshi3.com=201; wxa_level=1; jxsid=16235677393069885810; TrackerID=Tl62UMetNH7M17nwrZ9aL45VukQzz9hdNaSL6EcDIc6exGugidYMqV4ooEHL5LanNTnbzV6Qja14w6lu6A4S_KfN3hQpgukfdGRK8_AxpeUvrV2Oh8J7yrIh9zcz3up0tcHyBNW5BexizSldXceqtw; pt_key=AAJgxa30ADA219fM7phJli1GyyJE2vYUbFWDImRCcGrfIGCzjcGAY5PZ572_wR4HShpXuLLt9fs; pt_pin=jd_41736d6e7beca; pt_token=yqazp328; pwdt_id=jd_41736d6e7beca; sfstoken=tk01mda271d0fa8sMisyKzJHdkFDra4nW31kOihBYoUlVPPp6Dx4QyKA3yrvStUtnt2+x1IciNeWCOttuGd2udcE7b9Q; RT="z=1&dm=jd.com&si=jdvy34vzaz&ss=kpuubjz7&sl=3&tt=241&obo=2&nu=d41d8cd98f00b204e9800998ecf8427e&cl=2930&ld=29ma&r=265edb01deecdf8aa4a4fef46c1b077d&ul=29mc&hd=2ban"; cid=9; wqmnx1=MDEyNjM5MnRlbXdpdj01MC91aSA0VzdNR3IuTWYzZmZCVkNVKA==; __jdb=122270672.8.16030514737191760624518|237.1623567536; mba_sid=16235677409738238691232938047.5; __wga=1623567865574.1623567865574.1622889990450.1619099765410.1.6; PPRD_P=UUID.16030514737191760624518; jxsid_s_t=1623567865634; jxsid_s_u=https://home.m.jd.com/myJd/newhome.action; shshshfp=c5280e7ae63abfcac445b18be2db63f7; shshshsID=07b733ccba15c68fbff24b61a3bd3a61_2_1623567866342
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
