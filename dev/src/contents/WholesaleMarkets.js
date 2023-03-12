import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {Link} from '../ui/index.js';

export default function WholesaleMarkets () {
    return (
        <Box style={{height: '100%',width: '100%'}}>
          <Container maxWidth="lg">

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                卸売市場情報
              </Typography>
              <Link href="https://www.maff.go.jp/j/shokusan/sijyo/info/index.html">
                農林水産庁ホーム： 新事業・食品産業 卸売市場情報
              </Link>
            </Paper>

            <Paper sx={{p:'22px', mt:5}}>
              <Link href="https://www.maff.go.jp/j/shokusan/sijyo/info/link.html">
                農林水産庁ホーム： 全国の中央卸売市場へのリンク
              </Link>

              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.name}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell>
                            <Link href={row.url}>
                              {row.name}
                            </Link>
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

          </Container>

          <div style={{height:222}}/>
        </Box>
    );
}

const data = [
    { name: '札幌市中央卸売市場', url: 'http://www.sapporo-market.gr.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '青森市中央卸売市場', url: 'https://www.city.aomori.aomori.jp/sangyo-koyou/sangyo/chuouoroshiuriba/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '八戸市中央卸売市場', url: 'https://www.city.hachinohe.aomori.jp/soshikikarasagasu/chuooroshiurishijo/1690.html', location: { longitude: -1, latitude: -1 } },
    { name: '盛岡市中央卸売市場', url: 'http://www.morioka-sijyo.gr.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '仙台市中央卸売市場', url: 'http://www.city.sendai.jp/shizen/nogyo/sakumotsu/1163.html', location: { longitude: -1, latitude: -1 } },
    { name: '秋田市中央卸売市場', url: 'https://www.city.akita.lg.jp/kurashi/1009912/index.html', location: { longitude: -1, latitude: -1 } },
    { name: 'いわき市中央卸売市場', url: 'http://www.city.iwaki.lg.jp/www/genre/1456105292045/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '宇都宮市中央卸売市場', url: 'http://schit.net/miyamarket/', location: { longitude: -1, latitude: -1 } },
    { name: 'さいたま市食肉中央卸売市場', url: 'http://www.city.saitama.jp/006/015/048/002/p000089.html', location: { longitude: -1, latitude: -1 } },
    { name: '東京都中央卸売市場', url: 'http://www.shijou.metro.tokyo.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '横浜市中央卸売市場', url: 'http://www.city.yokohama.lg.jp/keizai/shogyo/orosi/', location: { longitude: -1, latitude: -1 } },
    { name: '川崎市中央卸売市場', url: 'http://www.city.kawasaki.jp/shisetsu/category/46-2-0-0-0-0-0-0-0-0.html', location: { longitude: -1, latitude: -1 } },
    { name: '静岡市中央卸売市場', url: 'http://www.city.shizuoka.jp/000_000419.html', location: { longitude: -1, latitude: -1 } },
    { name: '浜松市中央卸売市場', url: 'https://www.city.hamamatsu.shizuoka.jp/orosika/food/oroshi/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '新潟市中央卸売市場', url: 'http://www.city.niigata.lg.jp/business/ichiba/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '金沢市中央卸売市場', url: 'http://www.kanazawa-market.or.jp/Homepage/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '福井市中央卸売市場', url: 'http://www.fukui-market.jp/fmarket/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '岐阜市中央卸売市場', url: 'http://www.gifu-ichiba.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '名古屋市中央卸売市場', url: 'http://www.city.nagoya.jp/kurashi/category/19-18-0-0-0-0-0-0-0-0.html', location: { longitude: -1, latitude: -1 } },
    { name: '京都市中央卸売市場第一市場', url: 'https://www.city.kyoto.lg.jp/menu2/category/33-0-0-0-0-0-0-0-0-0.html', location: { longitude: -1, latitude: -1 } },
    { name: '京都市中央卸売市場第二市場', url: 'https://www.city.kyoto.lg.jp/menu2/category/34-0-0-0-0-0-0-0-0-0.html', location: { longitude: -1, latitude: -1 } },
    { name: '大阪府中央卸売市場', url: 'http://www.pref.osaka.lg.jp/fuichiba/', location: { longitude: -1, latitude: -1 } },
    { name: '大阪市中央卸売市場', url: 'http://www.city.osaka.lg.jp/sangyo/category/3051-1-0-0-0-0-0-0-0-0.html', location: { longitude: -1, latitude: -1 } },
    { name: '神戸市中央卸売市場', url: 'https://www.shijou-kobe.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '姫路市中央卸売市場', url: 'http://www.city.himeji.lg.jp/s60/2216013.html', location: { longitude: -1, latitude: -1 } },
    { name: '奈良県中央卸売市場', url: 'http://www.pref.nara.jp/dd.aspx?menuid=1756', location: { longitude: -1, latitude: -1 } },
    { name: '和歌山市中央卸売市場', url: 'http://www.city.wakayama.wakayama.jp/kurashi/sangyo_koyo_roudou/1001116/1007759/1007760.html', location: { longitude: -1, latitude: -1 } },
    { name: '岡山市中央卸売市場', url: 'http://www.city.okayama.jp/category/category_00000544.html', location: { longitude: -1, latitude: -1 } },
    { name: '広島市中央卸売市場', url: 'https://www.city.hiroshima.lg.jp/site/chuomarket/', location: { longitude: -1, latitude: -1 } },
    { name: '宇部市中央卸売市場', url: 'https://www.city.ube.yamaguchi.jp/machizukuri/sangyou/shijou/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '徳島市中央卸売市場', url: 'http://www.city.tokushima.tokushima.jp/chuo_ichiba', location: { longitude: -1, latitude: -1 } },
    { name: '高松市中央卸売市場', url: 'https://www.city.takamatsu.kagawa.jp/kurashi/kurashi/shisetsu/chuoichiba/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '松山市中央卸売市場', url: 'http://www.matsuyama-ichiba.net', location: { longitude: -1, latitude: -1 } },
    { name: '高知市中央卸売市場', url: 'http://www.city.kochi.kochi.jp/soshiki/106/', location: { longitude: -1, latitude: -1 } },
    { name: '北九州市中央卸売市場', url: 'http://www.city.kitakyushu.lg.jp/business/menu03_0242.html', location: { longitude: -1, latitude: -1 } },
    { name: '福岡市中央卸売市場', url: 'https://www.city.fukuoka.lg.jp/nosui/somu/life/0200.html', location: { longitude: -1, latitude: -1 } },
    { name: '久留米市中央卸売市場', url: 'http://www.city.kurume.fukuoka.jp/1500soshiki/9087ichiba', location: { longitude: -1, latitude: -1 } },
    { name: '長崎市中央卸売市場', url: 'http://www.nagasaki-ichiba.jp/', location: { longitude: -1, latitude: -1 } },
    { name: '宮崎市中央卸売市場', url: 'http://www.city.miyazaki.miyazaki.jp/business/agriculture_and_fisheries/market/', location: { longitude: -1, latitude: -1 } },
    { name: '鹿児島市中央卸売市場', url: 'http://www.city.kagoshima.lg.jp/sangyo/shijo/index.html', location: { longitude: -1, latitude: -1 } },
    { name: '沖縄県中央卸売市場', url: 'http://www.pref.okinawa.jp/site/norin/oroshiuri/index.html', location: { longitude: -1, latitude: -1 } },
];
