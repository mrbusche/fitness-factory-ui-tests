describe('Test redirects', () => {
    it('/home/item/5844/hb140b/harbinger_pro_wristwrap_gloves', () => {
        cy.visit('https://fitnessfactory.com/home/item/5844/hb140b/harbinger_pro_wristwrap_gloves/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/5868/hb223/harbinger_7_5_inch_firmfit_contour_belt', () => {
        cy.visit('https://fitnessfactory.com/home/item/5868/hb223/harbinger_7_5_inch_firmfit_contour_belt/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-belts-harnesses/');
    })
    it('/Home/Item/5885/HB21307/Harbinger_Padded_Lifting_Straps_-_Pink', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5885/HB21307/Harbinger_Padded_Lifting_Straps_-_Pink/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/Item/5885/HB21307/Harbinger_Pink_Padded_Lifting_Straps', () => {
        cy.visit('https://fitnessfactory.com/home/Item/5885/HB21307/Harbinger_Pink_Padded_Lifting_Straps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/Home/Item/5885/HB21307/Harbinger_Pink_Padded_Lifting_Straps', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5885/HB21307/Harbinger_Pink_Padded_Lifting_Straps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/5885/hb21307/harbinger_pink_padded_lifting_straps', () => {
        cy.visit('https://fitnessfactory.com/home/item/5885/hb21307/harbinger_pink_padded_lifting_straps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/Item/5886/HB21700/Harbinger_Big_Grip__Pro_Lifting_Straps', () => {
        cy.visit('https://fitnessfactory.com/home/Item/5886/HB21700/Harbinger_Big_Grip__Pro_Lifting_Straps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/5886/hb21700/harbinger_big_grip__pro_lifting_straps', () => {
        cy.visit('https://fitnessfactory.com/home/item/5886/hb21700/harbinger_big_grip__pro_lifting_straps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/5891/hb46700/harbinger_power_knee_wraps', () => {
        cy.visit('https://fitnessfactory.com/home/item/5891/hb46700/harbinger_power_knee_wraps/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
    })
    it('/home/item/5905/mcgpkg1t/muscle_craft_gym', () => {
        cy.visit('https://fitnessfactory.com/home/item/5905/mcgpkg1t/muscle_craft_gym/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5905/mcgpkg1t/muscle_craft_gym/');
    })
    it('/home/item/5907/esb150/endurance_esb150_indoor_cycle', () => {
        cy.visit('https://fitnessfactory.com/home/item/5907/esb150/endurance_esb150_indoor_cycle/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5907/esb150/endurance_esb150_indoor_cycle/');
    })
    it('/home/Item/5907/ESB150/Endurance_ESB150_Indoor_Cycle', () => {
        cy.visit('https://fitnessfactory.com/home/Item/5907/ESB150/Endurance_ESB150_Indoor_Cycle/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5907/esb150/endurance_esb150_indoor_cycle/');
    })
    it('/Home/Item/5913/BSTROC-NAT/Body-Solid_Roepke_Olympic_Barbell_Collars', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5913/BSTROC-NAT/Body-Solid_Roepke_Olympic_Barbell_Collars/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5913/bstroc-nat/body-solid_roepke_olympic_barbell_collars/');
    })
    it('/Home/Item/5914/S2ACD/2/Pro_ClubLine_Series_2_S2ACD_Weight_Assist_VKR/service', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5914/S2ACD/2/Pro_ClubLine_Series_2_S2ACD_Weight_Assist_VKR/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5914/s2acd/2/pro_clubline_series_2_s2acd_weight_assist_vkr/service=/');
    })
    it('/home/item/5919/herk/kettler_herk_convertible_power_tower_and_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/5919/herk/kettler_herk_convertible_power_tower_and_bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5919/herk/kettler_herk_convertible_power_tower_and_bench/');
    })
    it('/Home/Item/5921/BSTSMB/Body-Solid_Soft_Medicine_Balls_6-30_lbs_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5921/BSTSMB/Body-Solid_Soft_Medicine_Balls_6-30_lbs_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5921/bstsmb/body-solid_soft_medicine_balls_6-30_lbs_/');
    })
    it('/home/item/5941/sdp/25_lb__round_rubber_dumbbell', () => {
        cy.visit('https://fitnessfactory.com/home/item/5941/sdp/25_lb__round_rubber_dumbbell/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5941/sdp/25_lb__round_rubber_dumbbell/');
    })
    it('/home/item/5970/spr07-70584/spri_18_inch_tiger_tail_rolling_massager', () => {
        cy.visit('https://fitnessfactory.com/home/item/5970/spr07-70584/spri_18_inch_tiger_tail_rolling_massager/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5970/spr07-70584/spri_18_inch_tiger_tail_rolling_massager/');
    })
    it('/home/item/5986/rfmcg5112/glacier_puzzle_tile_-_beveled_corner', () => {
        cy.visit('https://fitnessfactory.com/home/item/5986/rfmcg5112/glacier_puzzle_tile_-_beveled_corner/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5986/rfmcg5112/glacier_puzzle_tile_-_beveled_corner/');
    })
    it('/home/item/5987/ob79wcb/women_s_15_kg_cross_fitness_small_shaft_bar', () => {
        cy.visit('https://fitnessfactory.com/home/item/5987/ob79wcb/women_s_15_kg_cross_fitness_small_shaft_bar/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5987/ob79wcb/women_s_15_kg_cross_fitness_small_shaft_bar/');
    })
    it('/Home/Item/5989/GPR378P4/Body-Solid_Power_Rack_Package_with_Lat', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5989/GPR378P4/Body-Solid_Power_Rack_Package_with_Lat/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5989/gpr378p4/body-solid_power_rack_package_with_lat/');
    })
    it('/home/item/5992/vx-11/210/vectra_vx-11_leg_press___arm_station/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/5992/vx-11/210/vectra_vx-11_leg_press___arm_station/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5992/vx-11/210/vectra_vx-11_leg_press___arm_station/service=/');
    })
    it('/home/item/5992/vx-11/210/vectra_vx-11_leg_press_arm_station_210lb__stack', () => {
        cy.visit('https://fitnessfactory.com/home/item/5992/vx-11/210/vectra_vx-11_leg_press_arm_station_210lb__stack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5992/vx-11/210/vectra_vx-11_leg_press_arm_station_210lb__stack/');
    })
    it('/Home/Item/5994/VX-48/Vectra_VX-48_Ultimate_Multi_Stack_Strength_System', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/5994/VX-48/Vectra_VX-48_Ultimate_Multi_Stack_Strength_System/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5994/vx-48/vectra_vx-48_ultimate_multi_stack_strength_system/');
    })
    it('/home/item/5997/v1650/vectra_on-line_1650/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/home/item/5997/v1650/vectra_on-line_1650/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/5997/v1650/vectra_on-line_1650/adeasel.com');
    })
    it('/home/item/6001/vx-11/260/vectra_vx-11_leg_press___arm_station_260lb__stack/service=/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6001/vx-11/260/vectra_vx-11_leg_press___arm_station_260lb__stack/service=/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6001/vx-11/260/vectra_vx-11_leg_press___arm_station_260lb__stack/service=/service=/');
    })
    it('/Home/Item/6014/SWT1000/Pro_ClubLine_SWT1000_Weight_Tree_Barbell_Rack', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6014/SWT1000/Pro_ClubLine_SWT1000_Weight_Tree_Barbell_Rack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6014/swt1000/pro_clubline_swt1000_weight_tree_barbell_rack/');
    })
    it('/home/item/6015/sab500/pro_clubline_commercial_ab_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/6015/sab500/pro_clubline_commercial_ab_bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6015/sab500/pro_clubline_commercial_ab_bench/');
    })
    it('/home/item/6017/sdps/80_to_100_lb__round_rubber_dumbbell_set/service=/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/home/item/6017/sdps/80_to_100_lb__round_rubber_dumbbell_set/service=/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6017/sdps/80_to_100_lb__round_rubber_dumbbell_set/service=/adeasel.com');
    })
    it('/home/Item/6034/SVKR1000/Body-Solid_ProClub_Vertical_Knee_Raise_Pull_Up', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6034/SVKR1000/Body-Solid_ProClub_Vertical_Knee_Raise_Pull_Up/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6034/svkr1000/body-solid_proclub_vertical_knee_raise_pull_up/');
    })
    it('/Home/Item/6034/SVKR1000/Pro_ClubLine_SVKR1000_Vertical_Knee_Raise_Pull_Up', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6034/SVKR1000/Pro_ClubLine_SVKR1000_Vertical_Knee_Raise_Pull_Up/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6034/svkr1000/pro_clubline_svkr1000_vertical_knee_raise_pull_up/');
    })
    it('/home/item/6037/ts200/totalstretch_ts200', () => {
        cy.visit('https://fitnessfactory.com/home/item/6037/ts200/totalstretch_ts200/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6037/ts200/totalstretch_ts200/');
    })
    it('/Home/Item/6059/9PHYP200X/Powerline_PHYP200X_Hyperextension_Floor_Model/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6059/9PHYP200X/Powerline_PHYP200X_Hyperextension_Floor_Model/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/Item/6059/9PHYP200X/Powerline_PHYP200X_Hyperextension_Floor_Model/adeasel.com');
    })
    it('/home/item/6064/ffoflagt/flag_t-shirts', () => {
        cy.visit('https://fitnessfactory.com/home/item/6064/ffoflagt/flag_t-shirts/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6064/ffoflagt/flag_t-shirts/');
    })
    it('/home/item/6072/g1srstk/body-solid_g1s_selectorized_red_stack_home_gym', () => {
        cy.visit('https://fitnessfactory.com/home/item/6072/g1srstk/body-solid_g1s_selectorized_red_stack_home_gym/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6072/g1srstk/body-solid_g1s_selectorized_red_stack_home_gym/');
    })
    it('/home/item/6075/gdcc210rstk/body-solid_compact_functional_trainer_red_stack_edition/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6075/gdcc210rstk/body-solid_compact_functional_trainer_red_stack_edition/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6075/gdcc210rstk/body-solid_compact_functional_trainer_red_stack_edition/service=/');
    })
    it('/Home/Item/6088/WPR78P3/Body-Solid_Power_Rack_and_Lat_Station_Package/service', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6088/WPR78P3/Body-Solid_Power_Rack_and_Lat_Station_Package/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6088/wpr78p3/body-solid_power_rack_and_lat_station_package/service=/');
    })
    it('/home/item/6093/spt026002/spirit_yoga_strap', () => {
        cy.visit('https://fitnessfactory.com/home/item/6093/spt026002/spirit_yoga_strap/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
    })
    it('/home/item/6096/spt004003/spirit_tcr_weighted_jump_rope', () => {
        cy.visit('https://fitnessfactory.com/home/item/6096/spt004003/spirit_tcr_weighted_jump_rope/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
    })
    it('/home/item/6097/spt008004/spirit_training_parachute', () => {
        cy.visit('https://fitnessfactory.com/home/item/6097/spt008004/spirit_training_parachute/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/brand/spri/');
    })
    it('/Home/Item/6107/OTB50P210/Shrug_Bar_with_210lb__Bumper_Plates_Package/service', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6107/OTB50P210/Shrug_Bar_with_210lb__Bumper_Plates_Package/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6107/otb50p210/shrug_bar_with_210lb__bumper_plates_package/service=/');
    })
    it('/home/item/6139/bhu500/bladez_fitness_u500i_upright_bike', () => {
        cy.visit('https://fitnessfactory.com/home/item/6139/bhu500/bladez_fitness_u500i_upright_bike/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6139/bhu500/bladez_fitness_u500i_upright_bike/');
    })
    it('/Home/Item/6145/GBR10/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6145/GBR10/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/Item/6145/GBR10/adeasel.com');
    })
    it('/home/item/6159/bfpr100-pack1/best_fitness_power_rack_package__1__bench___weight_set/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6159/bfpr100-pack1/best_fitness_power_rack_package__1__bench___weight_set/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6159/bfpr100-pack1/best_fitness_power_rack_package__1__bench___weight_set/service=/');
    })
    it('/Home/Item/6160/BFPR100-PACK2/Best_Fitness_BFPR100_Power_Rack_Package_2__Bench__300lb__Set__Mat', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6160/BFPR100-PACK2/Best_Fitness_BFPR100_Power_Rack_Package_2__Bench__300lb__Set__Mat/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6160/bfpr100-pack2/best_fitness_bfpr100_power_rack_package_2__bench__300lb__set__mat/');
    })
    it('/Home/Item/6160/BFPR100-PACK2/Best_Fitness_Power_Rack_Package_2_with_Bench__300lb__Weight_Set', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6160/BFPR100-PACK2/Best_Fitness_Power_Rack_Package_2_with_Bench__300lb__Weight_Set/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6160/bfpr100-pack2/best_fitness_power_rack_package_2_with_bench__300lb__weight_set/');
    })
    it('/home/item/6160/bfpr100r-pack2/best_fitness_bfpr100_power_rack_package_2', () => {
        cy.visit('https://fitnessfactory.com/home/item/6160/bfpr100r-pack2/best_fitness_bfpr100_power_rack_package_2/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6160/bfpr100r-pack2/best_fitness_bfpr100_power_rack_package_2/');
    })
    it('/Home/Item/6166/BSTSB/Body-Solid_Exercise_Fitness_Balls', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6166/BSTSB/Body-Solid_Exercise_Fitness_Balls/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6166/bstsb/body-solid_exercise_fitness_balls/');
    })
    it('/Home/Item/6167/BSTFB/Body-Solid_Cardio_Fitness_Bars_4-36lbs_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6167/BSTFB/Body-Solid_Cardio_Fitness_Bars_4-36lbs_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6167/bstfb/body-solid_cardio_fitness_bars_4-36lbs_/');
    })
    it('/home/item/6171/bstsmb/body-solid_soft_medicine_balls', () => {
        cy.visit('https://fitnessfactory.com/home/item/6171/bstsmb/body-solid_soft_medicine_balls/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6171/bstsmb/body-solid_soft_medicine_balls/');
    })
    it('/Home/Item/6171/BSTSMB/Body-Solid_Tools_Soft_Medicine_Balls', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6171/BSTSMB/Body-Solid_Tools_Soft_Medicine_Balls/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6171/bstsmb/body-solid_tools_soft_medicine_balls/');
    })
    it('/home/Item/6172/PEPLYO/Pro-Elite_Wood_Plyo_Boxes', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6172/PEPLYO/Pro-Elite_Wood_Plyo_Boxes/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6172/peplyo/pro-elite_wood_plyo_boxes/');
    })
    it('/Home/Item/6173/BSTMB/Body-Solid_Medicine_Balls_2-30lbs_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6173/BSTMB/Body-Solid_Medicine_Balls_2-30lbs_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6173/bstmb/body-solid_medicine_balls_2-30lbs_/');
    })
    it('/Home/Item/6173/BSTMB/Body-Solid_Tools_Medicine_Ball_Clearance_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6173/BSTMB/Body-Solid_Tools_Medicine_Ball_Clearance_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6173/bstmb/body-solid_tools_medicine_ball_clearance_/');
    })
    it('/Home/Item/6179/LMPP/Pivot_Plate_Landmine_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6179/LMPP/Pivot_Plate_Landmine_Attachment', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6179/lmpp/pivot_plate_landmine_attachment/');
    })
    it('/Home/Item/6181/HWHVP/Hyperwear_Pro_Weight_Vest', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6181/HWHVP/Hyperwear_Pro_Weight_Vest', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6181/hwhvp/hyperwear_pro_weight_vest/');
    })
    it('/home/item/6181/hwhvp/hyperwear_pro_weight_vest', () => {
        cy.visit('https://fitnessfactory.com/home/item/6181/hwhvp/hyperwear_pro_weight_vest/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6181/hwhvp/hyperwear_pro_weight_vest/');
    })
    it('/Home/Item/6203/BSTFM/Roll_Up_Exercise_Floor_Mat_48__x_20_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6203/BSTFM/Roll_Up_Exercise_Floor_Mat_48__x_20_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6203/bstfm/roll_up_exercise_floor_mat_48__x_20_/');
    })
    it('/Home/Item/6203/BSTFM/Roll_Up_Floor_Mat_48_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6203/BSTFM/Roll_Up_Floor_Mat_48_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6203/bstfm/roll_up_floor_mat_48_/');
    })
    it('/Home/Item/6203/BSTFM10/Body-Solid_Roll_Up_Exercise_Mat', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6203/BSTFM10/Body-Solid_Roll_Up_Exercise_Mat/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6203/bstfm10/body-solid_roll_up_exercise_mat/');
    })
    it('/Home/Item/6206/GDCC300/Body-Solid_GDCC200_Functional_Trainer_300lb__Stacks', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6206/GDCC300/Body-Solid_GDCC200_Functional_Trainer_300lb__Stacks/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6206/gdcc300/body-solid_gdcc200_functional_trainer_300lb__stacks/');
    })
    it('/Home/Item/6206/GDCC300/Body-Solid_GDCC200_Functional_Trainer_with_300lb__Stacks', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6206/GDCC300/Body-Solid_GDCC200_Functional_Trainer_with_300lb__Stacks/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6206/gdcc300/body-solid_gdcc200_functional_trainer_with_300lb__stacks/');
    })
    it('/Home/Item/6215/SPR1000/Body-Solid_SPR1000_Power_Rack', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6215/SPR1000/Body-Solid_SPR1000_Power_Rack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6215/spr1000/body-solid_spr1000_power_rack/');
    })
    it('/home/item/6217/sprsf/spr1000_safeties', () => {
        cy.visit('https://fitnessfactory.com/home/item/6217/sprsf/spr1000_safeties/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6217/sprsf/spr1000_safeties/');
    })
    it('/Home/Item/6218/SPRST/Body-Solid_SPR_Storage_Tray', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6218/SPRST/Body-Solid_SPR_Storage_Tray/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6218/sprst/body-solid_spr_storage_tray/');
    })
    it('/Home/Item/6218/SPRST/Storage_Tray_SPRST', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6218/SPRST/Storage_Tray_SPRST', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6218/sprst/storage_tray_sprst/');
    })
    it('/Home/Item/6220/SPRJC/J-Cup_Lift_Offs', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6220/SPRJC/J-Cup_Lift_Offs/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6220/sprjc/j-cup_lift_offs/');
    })
    it('/Home/Item/6220/SPRJC/J-Cup_Lift_Offs_SPRJC', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6220/SPRJC/J-Cup_Lift_Offs_SPRJC/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6220/sprjc/j-cup_lift_offs_sprjc/');
    })
    it('/Home/Item/6221/SPRTB/Dual_T-Bar_Row_Platform_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6221/SPRTB/Dual_T-Bar_Row_Platform_Attachment/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6221/sprtb/dual_t-bar_row_platform_attachment/');
    })
    it('/Home/Item/6222/SPRCB/SPR1000_Fat_Chinning_Bar', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6222/SPRCB/SPR1000_Fat_Chinning_Bar/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6222/sprcb/spr1000_fat_chinning_bar/');
    })
    it('/Home/Item/6225/GDR24-NPACK/GDR24_Vertical_Dumbbell_Rack_with_12_Neoprene_Pairs', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6225/GDR24-NPACK/GDR24_Vertical_Dumbbell_Rack_with_12_Neoprene_Pairs/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6225/gdr24-npack/gdr24_vertical_dumbbell_rack_with_12_neoprene_pairs/');
    })
    it('/home/item/6232/l790resctoss/landice_l7_cardio_treadmill_with_ortho_belt/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6232/l790resctoss/landice_l7_cardio_treadmill_with_ortho_belt/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6232/l790resctoss/landice_l7_cardio_treadmill_with_ortho_belt/service=/');
    })
    it('/Home/Item/6236/L890RESPTOSS/Landice_L8_Pro_Trainer_Treadmill_with_Ortho_Belt', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6236/L890RESPTOSS/Landice_L8_Pro_Trainer_Treadmill_with_Ortho_Belt/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6236/l890resptoss/landice_l8_pro_trainer_treadmill_with_ortho_belt/');
    })
    it('/home/item/6236/l890resptoss/landice_l8_pro_trainer_treadmill_with_ortho_belt', () => {
        cy.visit('https://fitnessfactory.com/home/item/6236/l890resptoss/landice_l8_pro_trainer_treadmill_with_ortho_belt/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6236/l890resptoss/landice_l8_pro_trainer_treadmill_with_ortho_belt/');
    })
    it('/home/item/6237/l890respstoss/landice_l8_pro_sports_treadmill_with_ortho_belt/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6237/l890respstoss/landice_l8_pro_sports_treadmill_with_ortho_belt/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6237/l890respstoss/landice_l8_pro_sports_treadmill_with_ortho_belt/service=/');
    })
    it('/home/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/home/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/adeasel.com');
    })
    it('/Home/Item/6249/SMTLDBSTAND/Stairmaster_TwistLock_Dumbbells_with_Stand', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6249/SMTLDBSTAND/Stairmaster_TwistLock_Dumbbells_with_Stand/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6249/smtldbstand/stairmaster_twistlock_dumbbells_with_stand/');
    })
    it('/Home/Item/6252/FEXS/Encore_Xtreme_Set/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6252/FEXS/Encore_Xtreme_Set/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/Item/6252/FEXS/Encore_Xtreme_Set/adeasel.com');
    })
    it('/home/Item/6255/9H1000TOUCH/Helix_H1000_Touch_Lateral_Trainer_Floor_Model/service', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6255/9H1000TOUCH/Helix_H1000_Touch_Lateral_Trainer_Floor_Model/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6255/9h1000touch/helix_h1000_touch_lateral_trainer_floor_model/service=/');
    })
    it('/Home/Item/6256/9HLT3500/Helix_HLT_3500_Lateral_Aerobic_Trainer_Floor_Model/service', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6256/9HLT3500/Helix_HLT_3500_Lateral_Aerobic_Trainer_Floor_Model/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6256/9hlt3500/helix_hlt_3500_lateral_aerobic_trainer_floor_model/service=/');
    })
    it('/home/item/6256/9hlt3500/helix_hlt_3500_lateral_aerobic_trainer_floor_model/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6256/9hlt3500/helix_hlt_3500_lateral_aerobic_trainer_floor_model/service=/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6256/9hlt3500/helix_hlt_3500_lateral_aerobic_trainer_floor_model/service=/');
    })
    it('/Home/Item/6258/9TRUCS400T/True_CS400_Commercial_Treadmill_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6258/9TRUCS400T/True_CS400_Commercial_Treadmill_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6258/9trucs400t/true_cs400_commercial_treadmill_floor_model/');
    })
    it('/home/item/6260/9trucs400e16t/true_cs400_commercial_elliptical_-_16__touch_screen_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/6260/9trucs400e16t/true_cs400_commercial_elliptical_-_16__touch_screen_floor_model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6260/9trucs400e16t/true_cs400_commercial_elliptical_-_16__touch_screen_floor_model/');
    })
    it('/home/Item/6261/9TRUPS100R/True_PS100_Recumbent_Bike_Floor_Model/adeasel.com', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6261/9TRUPS100R/True_PS100_Recumbent_Bike_Floor_Model/adeasel.com', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/Item/6261/9TRUPS100R/True_PS100_Recumbent_Bike_Floor_Model/adeasel.com');
    })
    it('/Home/Item/6264/9LU7/Landice_LU7_Upright_Bike_-_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6264/9LU7/Landice_LU7_Upright_Bike_-_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6264/9lu7/landice_lu7_upright_bike_-_floor_model/');
    })
    it('/Home/Item/6279/9GCR100/Body-Solid_GCR100_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6279/9GCR100/Body-Solid_GCR100_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6279/9gcr100/body-solid_gcr100_floor_model/');
    })
    it('/Home/Item/6282/9GDR24/Body-Solid_GDR24_Dumbbell_Rack_Floor_Model_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6282/9GDR24/Body-Solid_GDR24_Dumbbell_Rack_Floor_Model_Forest_Park/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6282/9gdr24/body-solid_gdr24_dumbbell_rack_floor_model_forest_park/');
    })
    it('/Home/Item/6291/9B2-5U/Endurance_B2_5U_Electronic_Upright_Bike_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6291/9B2-5U/Endurance_B2_5U_Electronic_Upright_Bike_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6291/9b2-5u/endurance_b2_5u_electronic_upright_bike_floor_model/');
    })
    it('/Home/Item/6294/SPR1000BACK/Body-Solid_Commercial_Extended_Power_Rack', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6294/SPR1000BACK/Body-Solid_Commercial_Extended_Power_Rack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6294/spr1000back/body-solid_commercial_extended_power_rack/');
    })
    it('/home/item/6296/spr1000db/body-solid_commercial_double_power_rack', () => {
        cy.visit('https://fitnessfactory.com/home/item/6296/spr1000db/body-solid_commercial_double_power_rack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6296/spr1000db/body-solid_commercial_double_power_rack/');
    })
    it('/Home/Item/6307/9SPTCU800/Spirit_CU800_Upright_Bike_Floor_Model_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6307/9SPTCU800/Spirit_CU800_Upright_Bike_Floor_Model_Forest_Park/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6307/9sptcu800/spirit_cu800_upright_bike_floor_model_forest_park/');
    })
    it('/Home/Item/6314/SPRBACK/Rack_Extension_Kit_SPRBACK', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6314/SPRBACK/Rack_Extension_Kit_SPRBACK/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6314/sprback/rack_extension_kit_sprback/');
    })
    it('/home/item/6317/sdkr500kb/body-solid_2-tier_proclub_modular_storage_rack_-_kettlebell_shelves', () => {
        cy.visit('https://fitnessfactory.com/home/item/6317/sdkr500kb/body-solid_2-tier_proclub_modular_storage_rack_-_kettlebell_shelves/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6317/sdkr500kb/body-solid_2-tier_proclub_modular_storage_rack_-_kettlebell_shelves/');
    })
    it('/home/Item/6322/9TRUXM50-M/True_M50_Elliptical_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6322/9TRUXM50-M/True_M50_Elliptical_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6322/9truxm50-m/true_m50_elliptical_floor_model/');
    })
    it('/home/item/6325/fb300/endurance_fb300_fan_bike', () => {
        cy.visit('https://fitnessfactory.com/home/item/6325/fb300/endurance_fb300_fan_bike/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6325/fb300/endurance_fb300_fan_bike/');
    })
    it('/Home/Item/6342/SPR1000FFP1/Body-Solid_Commercial_Power_Rack_Package', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6342/SPR1000FFP1/Body-Solid_Commercial_Power_Rack_Package/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6342/spr1000ffp1/body-solid_commercial_power_rack_package/');
    })
    it('/home/Item/6342/SPR1000FFP1/Body-Solid_SPR1000_Power_Rack_Pack_with_Weight_Set', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6342/SPR1000FFP1/Body-Solid_SPR1000_Power_Rack_Pack_with_Weight_Set/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6342/spr1000ffp1/body-solid_spr1000_power_rack_pack_with_weight_set/');
    })
    it('/home/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000', () => {
        cy.visit('https://fitnessfactory.com/home/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000/');
    })
    it('/home/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6349/spr1000gg1/garage_gym_package_gg1_-_body-solid_spr1000/service=/');
    })
    it('/home/item/6351/spr1000gg2/garage_gym_package_gg2', () => {
        cy.visit('https://fitnessfactory.com/home/item/6351/spr1000gg2/garage_gym_package_gg2/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6351/spr1000gg2/garage_gym_package_gg2/');
    })
    it('/home/item/6355/spr1000gg2wsb/garage_gym_package_gg2_-_with_sfid325_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/6355/spr1000gg2wsb/garage_gym_package_gg2_-_with_sfid325_bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6355/spr1000gg2wsb/garage_gym_package_gg2_-_with_sfid325_bench/');
    })
    it('/Home/Item/6360/PPMY3-3100/Power_Plate_my3', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6360/PPMY3-3100/Power_Plate_my3/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6360/ppmy3-3100/power_plate_my3/');
    })
    it('/home/item/6360/ppmy3-3100/power_plate_my3', () => {
        cy.visit('https://fitnessfactory.com/home/item/6360/ppmy3-3100/power_plate_my3/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6360/ppmy3-3100/power_plate_my3/');
    })
    it('/home/item/6362/ppmy7-3150/power_plate_my7', () => {
        cy.visit('https://fitnessfactory.com/home/item/6362/ppmy7-3150/power_plate_my7/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6362/ppmy7-3150/power_plate_my7/');
    })
    it('/home/Item/6364/PT1/Personal_Power_Plate', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6364/PT1/Personal_Power_Plate/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6364/pt1/personal_power_plate/');
    })
    it('/Home/Item/6366/9T3I/Endurance_T3i_Treadmill_Floor_Model', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6366/9T3I/Endurance_T3i_Treadmill_Floor_Model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6366/9t3i/endurance_t3i_treadmill_floor_model/');
    })
    it('/Home/Item/6368/9TRUZ5.4/True_Z5_4_Treadmill_Floor_Model_Forest_Park', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6368/9TRUZ5.4/True_Z5_4_Treadmill_Floor_Model_Forest_Park/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6368/9truz5.4/true_z5_4_treadmill_floor_model_forest_park/');
    })
    it('/home/item/6373/sptcu900/spirit_cu900_upright_bike', () => {
        cy.visit('https://fitnessfactory.com/home/item/6373/sptcu900/spirit_cu900_upright_bike/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6373/sptcu900/spirit_cu900_upright_bike/');
    })
    it('/home/item/6374/concept2modeldgry/concept_2_rower_model_d_gray', () => {
        cy.visit('https://fitnessfactory.com/home/item/6374/concept2modeldgry/concept_2_rower_model_d_gray/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6374/concept2modeldgry/concept_2_rower_model_d_gray/');
    })
    it('/home/Item/6374/CONCEPT2MODELDGRY/Concept_2_Rower_Model_D_Gray', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6374/CONCEPT2MODELDGRY/Concept_2_Rower_Model_D_Gray/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6374/concept2modeldgry/concept_2_rower_model_d_gray/');
    })
    it('/home/item/6375/concept2modeldblk/concept_2_rower_model_d_black', () => {
        cy.visit('https://fitnessfactory.com/home/item/6375/concept2modeldblk/concept_2_rower_model_d_black', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6375/concept2modeldblk/concept_2_rower_model_d_black/');
    })
    it('/Home/Item/6382/OBPX/Chicago_Extreme_Bumper_Plates_in_10lb___15lb___25lb___35lb__and_45lb_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6382/OBPX/Chicago_Extreme_Bumper_Plates_in_10lb___15lb___25lb___35lb__and_45lb_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6382/obpx/chicago_extreme_bumper_plates_in_10lb___15lb___25lb___35lb__and_45lb_/');
    })
    it('/home/item/6382/obpx10/10_lb__chicago_extreme_bumper_plate', () => {
        cy.visit('https://fitnessfactory.com/home/item/6382/obpx10/10_lb__chicago_extreme_bumper_plate/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6382/obpx10/10_lb__chicago_extreme_bumper_plate/');
    })
    it('/Home/Item/6401/XTEFWHPR/X_Training_Farmers_Walk_Handles__Pair_', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6401/XTEFWHPR/X_Training_Farmers_Walk_Handles__Pair_/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6401/xtefwhpr/x_training_farmers_walk_handles__pair_/');
    })
    it('/home/item/6406/xtespotterarmpr/x_training_spotter_arm_pair', () => {
        cy.visit('https://fitnessfactory.com/home/item/6406/xtespotterarmpr/x_training_spotter_arm_pair/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6406/xtespotterarmpr/x_training_spotter_arm_pair/');
    })
    it('/home/Item/6406/XTESPOTTERARMPR/X_Training_Spotter_Arm_Pair', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6406/XTESPOTTERARMPR/X_Training_Spotter_Arm_Pair/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6406/xtespotterarmpr/x_training_spotter_arm_pair/');
    })
    it('/home/Item/6411/USA-6DIGITPROG-TIMER/USA_Timer_PRO_Full_Size_Programmable_Wall_Timer', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6411/USA-6DIGITPROG-TIMER/USA_Timer_PRO_Full_Size_Programmable_Wall_Timer/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6411/usa-6digitprog-timer/usa_timer_pro_full_size_programmable_wall_timer/');
    })
    it('/Home/Item/6413/USA-GARAGE-GYM-PROG-TIMER/USA_Timer_Pro_Garage_Edition_Wall_Timer_-_Programmable_Fitness_Timer', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6413/USA-GARAGE-GYM-PROG-TIMER/USA_Timer_Pro_Garage_Edition_Wall_Timer_-_Programmable_Fitness_Timer/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6413/usa-garage-gym-prog-timer/usa_timer_pro_garage_edition_wall_timer_-_programmable_fitness_timer/');
    })
    it('/Home/Item/6415/XTEDIPBARATTACH/X_Training_Dip_Bar_Attachment', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6415/XTEDIPBARATTACH/X_Training_Dip_Bar_Attachment/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6415/xtedipbarattach/x_training_dip_bar_attachment/');
    })
    it('/home/item/6415/xtedipbarattach/x_training_dip_bar_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/6415/xtedipbarattach/x_training_dip_bar_attachment/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6415/xtedipbarattach/x_training_dip_bar_attachment/');
    })
    it('/home/item/6416/afcb10pr/10_lb__crumb_bumper_pair', () => {
        cy.visit('https://fitnessfactory.com/home/item/6416/afcb10pr/10_lb__crumb_bumper_pair/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6416/afcb10pr/10_lb__crumb_bumper_pair/');
    })
    it('/home/item/6423/xte24ftwallrig/x_training_wall_mount_24__pull_up_rig', () => {
        cy.visit('https://fitnessfactory.com/home/item/6423/xte24ftwallrig/x_training_wall_mount_24__pull_up_rig/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6423/xte24ftwallrig/x_training_wall_mount_24__pull_up_rig/');
    })
    it('/Home/Item/6424/XTE34FTWALLRIG/X_Training_Wall_Mount_34__Pull_Up_Rig', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6424/XTE34FTWALLRIG/X_Training_Wall_Mount_34__Pull_Up_Rig/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6424/xte34ftwallrig/x_training_wall_mount_34__pull_up_rig/');
    })
    it('/home/item/6424/xte34ftwallrig/x_training_wall_mount_34__pull_up_rig', () => {
        cy.visit('https://fitnessfactory.com/home/item/6424/xte34ftwallrig/x_training_wall_mount_34__pull_up_rig/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6424/xte34ftwallrig/x_training_wall_mount_34__pull_up_rig/');
    })
    it('/Home/Item/6427/PPR200XP4/Powerline_Power_Rack_Package', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6427/PPR200XP4/Powerline_Power_Rack_Package/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6427/ppr200xp4/powerline_power_rack_package/');
    })
    it('/Home/Item/6431/GDR60-HEAVYSET/Body-Solid_5-70_lb__Rubber_Dumbbell_Free_Weight_Package', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6431/GDR60-HEAVYSET/Body-Solid_5-70_lb__Rubber_Dumbbell_Free_Weight_Package/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6431/gdr60-heavyset/body-solid_5-70_lb__rubber_dumbbell_free_weight_package/');
    })
    it('/home/item/6440/gfi21/body-solid_gfi21_flat_incline_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/6440/gfi21/body-solid_gfi21_flat_incline_bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6440/gfi21/body-solid_gfi21_flat_incline_bench/');
    })
    it('/Home/Item/6442/BSTLJO2/Lock-Jaw_OLY_2_Barbell_Collars', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6442/BSTLJO2/Lock-Jaw_OLY_2_Barbell_Collars/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6442/bstljo2/lock-jaw_oly_2_barbell_collars/');
    })
    it('/home/Item/6443/SFID425/Body-Solid_ProClub_SFID425_Flat-Incline-Decline_Bench', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6443/SFID425/Body-Solid_ProClub_SFID425_Flat-Incline-Decline_Bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6443/sfid425/body-solid_proclub_sfid425_flat-incline-decline_bench/');
    })
    it('/Home/Item/6443/SFID425/Body-Solid_ProClub_SFID425_Flat-Incline-Decline_Bench', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6443/SFID425/Body-Solid_ProClub_SFID425_Flat-Incline-Decline_Bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6443/sfid425/body-solid_proclub_sfid425_flat-incline-decline_bench/');
    })
    it('/home/item/6444/dr100/power_rack_dip_attachment', () => {
        cy.visit('https://fitnessfactory.com/home/item/6444/dr100/power_rack_dip_attachment/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6444/dr100/power_rack_dip_attachment/');
    })
    it('/home/item/6447/l10club/landice_l10_club_treadmill', () => {
        cy.visit('https://fitnessfactory.com/home/item/6447/l10club/landice_l10_club_treadmill/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6447/l10club/landice_l10_club_treadmill/');
    })
    it('/home/item/6448/gdr80/body-solid_vertical_dumbbell_rack', () => {
        cy.visit('https://fitnessfactory.com/home/item/6448/gdr80/body-solid_vertical_dumbbell_rack/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6448/gdr80/body-solid_vertical_dumbbell_rack/');
    })
    it('/Home/Item/6452/SPRPLATFORM/SPR_Power_Rack_Floor_Mat_Platform', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6452/SPRPLATFORM/SPR_Power_Rack_Floor_Mat_Platform/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6452/sprplatform/spr_power_rack_floor_mat_platform/');
    })
    it('/home/item/6457/rfmaw/shok_lok_rubber_puzzle_mats', () => {
        cy.visit('https://fitnessfactory.com/home/item/6457/rfmaw/shok_lok_rubber_puzzle_mats/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6457/rfmaw/shok_lok_rubber_puzzle_mats/');
    })
    it('/home/item/6468/trucs200/true_200_commercial_treadmill/service=/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6468/trucs200/true_200_commercial_treadmill/service=/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6468/trucs200/true_200_commercial_treadmill/service=/service=/');
    })
    it('/home/item/6468/trucs200/true_cs200_commercial_treadmill', () => {
        cy.visit('https://fitnessfactory.com/home/item/6468/trucs200/true_cs200_commercial_treadmill/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6468/trucs200/true_cs200_commercial_treadmill/');
    })
    it('/home/item/6483/gdr80sdx550/gdr80_5-50lb__sdx_hex_dumbbell_package/service=/service', () => {
        cy.visit('https://fitnessfactory.com/home/item/6483/gdr80sdx550/gdr80_5-50lb__sdx_hex_dumbbell_package/service=/service=', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6483/gdr80sdx550/gdr80_5-50lb__sdx_hex_dumbbell_package/service=/service=/');
    })
    it('/Home/Item/6483/GDR80SDX550/Vertical_Hex_Dumbbell_Package', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6483/GDR80SDX550/Vertical_Hex_Dumbbell_Package/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6483/gdr80sdx550/vertical_hex_dumbbell_package/');
    })
    it('/Home/Item/6485/BFPR100P4/Best_Fitness_BFPR100_Power_Rack_Lat_Package_4', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6485/BFPR100P4/Best_Fitness_BFPR100_Power_Rack_Lat_Package_4/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6485/bfpr100p4/best_fitness_bfpr100_power_rack_lat_package_4/');
    })
    it('/Home/Item/6493/SPR500HALFBACK/SPR500_Half_Back_Extension_with_Weight_Horns', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6493/SPR500HALFBACK/SPR500_Half_Back_Extension_with_Weight_Horns/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6493/spr500halfback/spr500_half_back_extension_with_weight_horns/');
    })
    it('/Home/Item/6493/SPRHALFBACK/Body-Solid_SPR500_Half_Rack_Extension', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6493/SPRHALFBACK/Body-Solid_SPR500_Half_Rack_Extension/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6493/sprhalfback/body-solid_spr500_half_rack_extension/');
    })
    it('/home/item/6496/spr500p2/body-solid_half_rack_with_bench', () => {
        cy.visit('https://fitnessfactory.com/home/item/6496/spr500p2/body-solid_half_rack_with_bench/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6496/spr500p2/body-solid_half_rack_with_bench/');
    })
    it('/home/Item/6497/SPR500BACKP4/Body-Solid_Half_Rack_with_Extension_Package', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6497/SPR500BACKP4/Body-Solid_Half_Rack_with_Extension_Package/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6497/spr500backp4/body-solid_half_rack_with_extension_package/');
    })
    it('/home/item/6515/9trucs40016t-m/true_cs400_commercial_elliptical_floor_model', () => {
        cy.visit('https://fitnessfactory.com/home/item/6515/9trucs40016t-m/true_cs400_commercial_elliptical_floor_model/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6515/9trucs40016t-m/true_cs400_commercial_elliptical_floor_model/');
    })
    it('/home/Item/6521/SPTXS895/Spirit_XS895_Adjustable_Incline_Stepper', () => {
        cy.visit('https://fitnessfactory.com/home/Item/6521/SPTXS895/Spirit_XS895_Adjustable_Incline_Stepper/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6521/sptxs895/spirit_xs895_adjustable_incline_stepper/');
    })
    it('/Home/Item/6537/STSTRX-MUSAP3/Star_Trac_S-TRx_Treadmill', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6537/STSTRX-MUSAP3/Star_Trac_S-TRx_Treadmill/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6537/ststrx-musap3/star_trac_s-trx_treadmill/');
    })
    it('/home/item/6537/ststrx-musap3/star_trac_s-trx_treadmill', () => {
        cy.visit('https://fitnessfactory.com/home/item/6537/ststrx-musap3/star_trac_s-trx_treadmill/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6537/ststrx-musap3/star_trac_s-trx_treadmill/');
    })
    it('/Home/Item/6538/STSTC-MUSAP0/Star_Trac_S-TRc_Treadmill', () => {
        cy.visit('https://fitnessfactory.com/Home/Item/6538/STSTC-MUSAP0/Star_Trac_S-TRc_Treadmill/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6538/ststc-musap0/star_trac_s-trc_treadmill/');
    })
    it('/home/item/6540/sm-hiitmillx/stairmaster_hiitmill_x', () => {
        cy.visit('https://fitnessfactory.com/home/item/6540/sm-hiitmillx/stairmaster_hiitmill_x/', { failOnStatusCode: false });
        cy.url().should('eq', 'https://www.fitnessfactory.com/item/6540/sm-hiitmillx/stairmaster_hiitmill_x/');
    })
})
