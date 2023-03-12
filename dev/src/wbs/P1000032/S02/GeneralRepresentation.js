import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Text from '../common/Text.js';

export default function GeneralRepresentation () {
    return (
        <Box sx={{p:'22px'}}>
          <Paper elevation={0}>
            <Text en="Every serialised PackStream value begins with a marker byte.">
              <Typography>シリアル化されたすべての PackStream 値は、マーカーバイト で始まります。</Typography>
            </Text>

            <Text en="The marker contains both data type information and direct or indirect size information for types that require it.">
              <Typography>マーカーには、データ型情報と、それを必要とする型の直接的または間接的なサイズ情報の両方が含まれます。</Typography>
            </Text>

            <Text en="How that size information is encoded varies by marker type.">
              <Typography>サイズ情報のエンコード方法は、マーカーの種類によって異なります。</Typography>
            </Text>

            <Text en="Some values, such as Boolean true, can be encoded within a single marker byte.">
              <Typography>Boolean true などの一部の値は、1 つのマーカー バイト内にエンコードできます。</Typography>
            </Text>

            <Text en="Many small integers (specifically between -16 and +127 inclusive) are also encoded within a single byte.">
              <Typography>多くの小さな整数 (具体的には -16 から +127 までの間) も 1 バイト内にエンコードされます。</Typography>
            </Text>

            <Text en="A number of marker bytes are reserved for future expansion of the format itself.">
              <Typography>フォーマット自体の将来の拡張のために、多数のマーカー バイトが予約されています。</Typography>
            </Text>

            <Text en="These bytes should not be used and encountering them in an incoming stream should treated as an error.">
              <Typography>これらのバイトは使用すべきではなく、着信ストリームでそれらに遭遇した場合はエラーとして処理する必要があります。</Typography>
            </Text>
          </Paper>

          <Paper elevation={0} sx={{mt:'22px'}}>
            <Typography variant="h5">Sized values</Typography>

            <Text en="Some representations are of a variable length and have their size explicitly encoded in the representation.">
              <Typography>一部の表現は可変長であり、そのサイズは表現で明示的にエンコードされています。</Typography>
            </Text>

            <Text en="Such values generally begin with a single marker byte, followed by a size, followed by the data content itself.">
              <Typography>このような値は通常、1 つのマーカー バイトで始まり、その後にサイズが続き、その後にデータ コンテンツ自体が続きます。</Typography>
            </Text>

            <Text en="In this context, the marker denotes both type and scale and therefore determines the number of bytes used to represent the size of the data.">
              <Typography>このコンテキストでは、マーカーはタイプとスケールの両方を示し、データのサイズを表すために使用されるバイト数を決定します。</Typography>
            </Text>

            <Text en="The size itself is encoded as either an 8-bit, 16-bit or 32-bit unsigned integer.">
              <Typography>サイズ自体は、8 ビット、16 ビット、または 32 ビットの符号なし整数としてエンコードされます。</Typography>
            </Text>

            <Text en="Sizes longer than this are not supported.">
              <Typography>これより長いサイズはサポートされていません。</Typography>
            </Text>

            <Box>
              <img src="https://neo4j.com/docs/bolt/current/_images/packstream_sized_value.png"
                   alt="packstream_sized_value.png"/>
            </Box>

          </Paper>

          <Paper elevation={0} sx={{mt:'22px'}}>
            <Typography variant="h5">Endianness</Typography>

            <Text en="PackStream exclusively uses big-endian representations.">
              <Typography>PackStream は、ビッグ エンディアン表現のみを使用します。</Typography>
            </Text>

            <Text en="This means that the most significant part of the value is written to the network or memory space first and the least significant part is written last.">
              <Typography>これは、値の最上位部分が最初にネットワークまたはメモリ空間に書き込まれ、最下位部分が最後に書き込まれることを意味します。</Typography>
            </Text>
          </Paper>
        </Box>
    );
}
