import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

interface ItineraryItem {
  time?: string;
  description: string;
  mapUrl?: string;
  details?: { label: string; content: string; mapUrl?: string }[];
  subList?: string[];
}

interface DayPlan {
  id: number;
  date: string;
  title: string;
  icon: string;
  items: ItineraryItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeDay = signal(1);

  days: DayPlan[] = [
    {
      id: 1,
      date: '05/11',
      title: '抵達沖繩 ─ 豐崎夕陽與購物',
      icon: 'beach_access',
      items: [
        { time: '14:40', description: '抵達那霸機場，辦理入境、領行李', mapUrl: 'https://www.google.com/maps/search/?api=1&query=那霸機場' },
        { time: '16:30', description: '搭 Uber 前往豐崎飯店 (車程約 20 分鐘)' },
        { time: '17:00', description: '辦理 Check-in', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Gran+View+Garden+Okinawa' },
        {
          time: '18:00',
          description: '📍 iias 沖繩豐崎 晚餐與採買',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=iias+沖繩豐崎',
          subList: [
            '逛街：ABC Mart、Uniqlo、大創、扭蛋機、namco 遊戲機台。',
            '必逛：1 樓 AEON STYLE 超市 (買水果)、西松屋 (幼兒備品)。',
            '晚餐：美食街 (Hanamaru 烏龍麵、A&W 漢堡、一幸舍拉麵等)。'
          ]
        }
      ]
    },
    {
      id: 2,
      date: '05/12',
      title: '水族館 ─ 瀨長島 ─ 進駐那霸',
      icon: 'waves',
      items: [
        { time: '09:00', description: '享用飯店早餐' },
        { time: '09:30', description: '辦理退房，行李寄放櫃台或帶往 iias' },
        {
          time: '10:00',
          description: '🎫 DMM Kariyushi 水族館 (位於 iias 內)',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=DMM+Kariyushi+水族館',
          subList: ['亮點：餵食體驗、跟豬玩。']
        },
        { time: '12:30', description: '午餐：iias 二樓美食街 或 前往瀨長島用餐' },
        {
          time: '14:00',
          description: '📍 瀨長島 Umikaji Terrace (搭 Uber 約 10 分鐘)',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=瀨長島+Umikaji+Terrace',
          subList: ['必吃：by・The・Shrimp 蝦飯、MOTOMU 咖哩麵包、yukuRu 冰淇淋。']
        },
        { time: '16:30', description: '搭 Uber 前往那霸市區' },
        { time: '17:00', description: 'Orion Hotel Naha 入住休息 (大人小憩)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Orion+Hotel+Naha' },
        {
          time: '18:30',
          description: '📍 國際通散策',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=國際通',
          subList: [
            '晚餐：MinUna 鰻魚飯、そば処五六八 (炸蝦天婦羅蕎麥麵)。',
            '超市：飯店對面 UNION (至23:00)、24 小時 MaxValu 牧志店。'
          ]
        }
      ]
    },
    {
      id: 3,
      date: '05/13',
      title: '親子動物園日 ─ 國際通大採買',
      icon: 'pets',
      items: [
        {
          time: '08:30',
          description: '早餐：📍 大和飯店 (Daiwa Roynet) 1樓 自助早餐 (06:30-10:00)',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Naha'
        },
        {
          time: '09:30',
          description: '📍 全家/超市採買',
          subList: ['買午餐飯糰、飲品放入保冰袋，準備園區野餐。']
        },
        {
          time: '10:00',
          description: '🎫 搭 Uber 前往 沖繩兒童王國 (車程約 40 分鐘)',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=沖繩兒童王國'
        },
        { time: '12:30', description: '午餐：園內餐廳 或 享用自備野餐' },
        { time: '15:00', description: '回飯店午休 或 逛國際通', subList: ['Blue Seal 冰淇淋、鹽屋餅乾。'] },
        {
          time: '18:00',
          description: '晚餐推薦與購物',
          details: [
            { label: '晚餐選項 1', content: '🎫 沖縄とんかつ小やじ (人氣豬排，需早點去排隊)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=小やじ豬排+沖繩' },
            { label: '晚餐選項 2', content: '📍 琉家拉麵 (國際通本店)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=琉家拉麵+那霸' }
          ],
          subList: ['點心/購物：卡樂比薯條、銀章魚燒、大國藥妝、驚安殿堂。']
        }
      ]
    },
    {
      id: 4,
      date: '05/14',
      title: '藝術光影 ─ 燒肉大餐 ─ 文化參拜',
      icon: 'auto_awesome',
      items: [
        { time: '09:00', description: '早餐：麥當勞 或 📍 沖繩飯糰 (Potama)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Potama+沖繩飯糰' },
        {
          time: '10:00',
          description: '🎫 📍 teamLab Future Park (T Galleria 內，室內冷氣充足)',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=teamLab+Future+Park+Okinawa'
        },
        { time: '13:00', description: '午餐：🎫 📍 敘敘苑燒肉 (歌町店)', mapUrl: 'https://www.google.com/maps/search/?api=1&query=敘敘苑燒肉+歌町店' },
        {
          time: '14:30',
          description: '行程方案二選一',
          subList: [
            '方案一 (建議)：📍 達摩寺 (看千本鳥居、畫達摩)。甜點 TOUCA BAKE SHOP。',
            '方案二：📍 波上宮參拜。11:00 可安排 🎫 Wakuwaku Kids Land (室內大球池)。'
          ]
        },
        { time: '18:30', description: '那霸市區晚餐 (自由探索或重複喜愛餐廳)' }
      ]
    },
    {
      id: 5,
      date: '05/15',
      title: '悠閒早餐 ─ 最後採買 ─ 返台',
      icon: 'shopping_bag',
      items: [
        { time: '09:00', description: '飯店早餐', subList: ['🎫 需另買券 (大人 3000 日幣，小孩免費)。'] },
        {
          time: '11:00',
          description: '退房寄放行李。國際通最後補貨、第一牧志公設市場散步',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=牧志公設市場'
        },
        { time: '12:00', description: '搭乘輕軌 (或 Uber) 前往機場' },
        { time: '12:30', description: '抵達那霸機場辦理登機' },
        { time: '13:00', description: '機場午餐：國內線二樓商場購物、最後巡禮' },
        { time: '15:50', description: '星宇 JX871 登機返台 ✈️' }
      ]
    }
  ];

  showDay(dayNum: number) {
    this.activeDay.set(dayNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
