# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## 마치며..

### 개발 진행 시 주안점을 둔 부분
- **중복 코드 제거**: 유지보수성을 높이고 효율적인 개발을 위해 컴포넌트화에 집중하였습니다.
- **추가 개발 사항**: Task에는 없었지만 사용자 경험 강화를 위해 상품 리스트 페이지를 별도로 추가하였습니다.

### 아쉬운 점
- **개발 속도**: 퍼블리싱과 병행하여 진행하다 보니 개발 속도가 예상보다 빠르지 못한 점이 아쉽습니다.
- **장바구니 기능**: 시간적 제약으로 인해 장바구니 기능이 완전하게 구현되지 못했습니다.
- **리스트 노출 조건 및 스타일**:
  - 상품이 품절되었거나 수량이 없는 경우의 노출 조건을 세부적으로 구현하고 추가하면 좋을 것 같습니다
- **정렬 기능**:
  - 할인률 순, 가격 순 등 정렬 기능을 추가하고 싶었습니다

### 보완해야 할 점
- **장바구니 기능 완성**:  
  - 상품 추가, 수정, 삭제 등 CRUD 기능을 완전히 구현해야 합니다.
  - 수량 변경 시 실시간으로 총 가격이 반영되도록 개선 필요.
- **반응형 디자인**:  
  - 다양한 디바이스에서 최적의 사용자 경험을 제공할 수 있도록 반응형 UI 개선.
