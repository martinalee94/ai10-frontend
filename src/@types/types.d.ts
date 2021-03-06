declare module 'type' {
  export type OptionType = {
    gender: string | null;
    height: number;
    weight: number;
    is_core: boolean;
    is_arm: boolean;
    is_recline: boolean;
    is_sit: boolean;
    is_stand: boolean;
    is_balance: boolean;
  };

  export type ReviewType = {
    id: string;
    user_id: string;
    created_at: string;
    modified_at: string;
    content: string;
    rating: number;
    course_id: string;
  };

  export type UserReviewType = {
    id: string;
    user_id: string;
    created_at: string;
    modified_at: string;
    content: string;
    rating: number;
    course_id: {
      id: string;
      course_name: string;
    };
  };
}
declare module '*.png';
declare module '*.jpeg';
// 여러 곳에서 사용할 타입 지정용 공간
