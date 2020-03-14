import { deepCopy } from "../utils/copy";

const SET_CATEGORIES = "SET_CATEGORIES";
const SET_PROMISES = "SET_PROMISES";

/**
 * categories: {
 *   [category1]: {           // 카테고리(분야)명
 *     voted: false           // 카테고리(분야) 선택 여부
 *     promises: [
 *       {
 *         voted: false,      // 공약 선택 여부
 *         summary: "",       // 공약
 *         contents: "",      // 공약 설명
 *         party: {
 *           name: "",        // 정당명
 *           color: "",       // 정당 색상
 *           image: ""        // 정당 로고
 *         }
 *       }
 *     ],
 *   },
 *   [category2]: {
 *     ...
 *   }
 *   ...
 * }
 */
export const initialState = {
  categories: {
    기술: {
      voted: true,
      promises: [
        {
          summary: `U턴 경제특구 설치`,
          contents: ` 우리기업의 해외투자는 매년 억 달러 규모로 증가 해외법인은 매년 천여개씩 증가 국내기업의 해외법인 총 고용인원은 약 만명 년 규모
    - 기업의 해외이전 가속화시 내수 부진 일자리 감소 등 국내 경제에 부정적 영향 우려
    - U턴 경제특구 설치로 경제활성화 및 일자리 창출(10% 유턴 시 매년 일자리 약 만개 창출)`,
          voted: true,
          party: {
            name: "A당",
            color: "red",
            image: ""
          }
        },
        {
          summary: `관광산업 활성화`,
          contents: `- 한국만의 경쟁력있는 문화체험관광 인프라 조성 지원
    - 자연친화적 산악관광 진흥
    - 외래관광객이 편리하게 여행할 수 있는 교통시스템 구축
    - 웰니스 의료관광 전략적 육성
    - 특화된 벤처 여행사 육성`,
          voted: true,
          party: {
            name: "B당",
            color: "red",
            image: ""
          }
        },
        {
          summary: `해양관광 활성화`,
          contents: `- 해양레저 관광활동이 활성화되고 있으나 이를 수용할 여가휴양시설 부족
    - 권역별 종합해양관광지구 및 해양관광 바닷길 조성
    - 해양자원 활용한 해양치유(해양헬스케어) 관광산업 육성
    - 크루즈 산업 활성화 위한 인프라(선박확보, 크루즈부두, 국제여객터미널) 확충
    - 마리나 인프라 확충 및 해양레저선박 클러스터 조성 추진
    - 수중레저산업 활성화를 위한 「수중레저법」제정 및 업종 신설, 지역별 수중레저 포인트 발굴 및 수중레저 체험프로그램 운영 등 수중레저거점 기반조성 추진`,
          voted: true,
          party: {
            name: "B당",
            color: "blue",
            image: ""
          }
        },
        {
          summary: `창조경제 활성화 기여 기업 및 개인 발굴·포상`,
          contents: `- 창조경제에 대한 국민 관심을 높이고 동참을 유도하기 위해서는 창조경제를 이끌고 있는 기업 및 개인들을 적극 발굴·지원하여 그들이 자긍심을 가질 수 있는 여건 조성이 필요
    - '대한민국 창조경제대상' 범위 확대, 훈격 상향 조정, 인센티브 강화
    - 창조경제 활성화 및 유공자들에 대한 포상과 격려 효과를 달성하기 위해 창조경제 대상의 범위 확대 훈격 상향 조정 인센티브 강화 등 추진`,
          voted: true,
          party: {
            name: "B당",
            color: "blue",
            image: ""
          }
        },
        {
          summary: `소득하위 70% 어르신에게 기초연금 30만원을 차등 없이 드리겠습니다.`,
          contents: `- 최소한의 노후는 국가가 책임져야 한다는 원칙 하에 기초연금액을 최저생계비의 절반 수준인 30만원(국민연금 값의 10% -> 15%)으로 인상`,
          voted: true,
          party: {
            name: "C당",
            color: "yellow",
            image: ""
          }
        }
      ]
    },
    국방: {
      voted: true,
      promises: [
        {
          summary: `"더 좋은" 청년일자리를 많이 만들겠습니다.`,
          contents: `- 청년일자리정책이 실패하면서 청년고용상황은 악화 일로 통계청고용동향을 보면 청년실업률이 년만에 최악의 수준인 9.5%에 이르고 있음
    - 경찰 소방 등 안전분야 사회복지 보건의료등 삶의 질 분야 교육분야 신재생에너지 등 지속가능분야 공공부문에서 34만 8천개의 청년 일자리 창출`,
          voted: true,
          party: {
            name: "A당",
            color: "red",
            image: ""
          }
        },
        {
          summary: `더불어 행복한 실질적 성평등사회를 만들겠습니다.`,
          contents: `- 「양성평등기본법」의 성공적 시행을 위해 성평등 정책 실효성 제고
    - 「성차별‧성희롱금지 및 권리구제 등에 관한 법」 제정
    - 여성대표성 제고
    - 양성평등 의식 문화 확산
    - 남녀동행을 위한 남녀동수 실현 법제화 추진`,
          voted: true,
          party: {
            name: "C당",
            color: "yellow",
            image: ""
          }
        }
      ]
    }
  },
  originalCategories: {}
};

export const handleCategoriesSet = categories => {
  return {
    type: SET_CATEGORIES,
    payload: {
      originalCategories: deepCopy(categories),
      categories
    }
  };
};

export const handlePromisesSet = (category, promises) => {
  return {
    type: SET_PROMISES,
    payload: {
      key: category,
      category: {
        promises,
        voted: true
      }
    }
  };
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES:
      return { ...state, ...payload };
    case SET_PROMISES:
      return {
        ...state,
        categories: {
          ...state.categories,
          [payload.key]: payload.category
        }
      };
    default:
      return { ...state };
  }
};
