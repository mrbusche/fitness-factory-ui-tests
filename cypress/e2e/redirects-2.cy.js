describe('Test redirects', () => {
  it('/Commercial/Item/5495/B5R/Endurance_B5R_Recumbent_Bike', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5495/B5R/Endurance_B5R_Recumbent_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5495/b5r/endurance_b5r_recumbent_bike/');
  })
  it('/Commercial/Item/5576/TRUCS900E/True_CS900_Commercial_Elliptical', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5576/TRUCS900E/True_CS900_Commercial_Elliptical/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5576/trucs900e/true_cs900_commercial_elliptical/');
  })
  it('/Commercial/Item/5600/HP200/Premium_Red_Weight_Stack_200lbs_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5600/HP200/Premium_Red_Weight_Stack_200lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5600/hp200/premium_red_weight_stack_200lbs_/');
  })
  it('/commercial/item/5662/ob864star10/body-solid_4_star_olympic_bar_10_pack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5662/ob864star10/body-solid_4_star_olympic_bar_10_pack/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5662/ob864star10/body-solid_4_star_olympic_bar_10_pack/service=/service=/');
  })
  it('/commercial/item/5662/ob864star10/four_star_olympic_bar_10_pack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5662/ob864star10/four_star_olympic_bar_10_pack/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5662/ob864star10/four_star_olympic_bar_10_pack/service=/service=/');
  })
  it('/Commercial/Item/5696/KBL/Body-Solid_Ergonomic_Vinyl_Kettleballs_5-60lbs_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5696/KBL/Body-Solid_Ergonomic_Vinyl_Kettleballs_5-60lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5696/kbl/body-solid_ergonomic_vinyl_kettleballs_5-60lbs_/');
  })
  it('/commercial/item/5712/sr-hex/body-solid_hexagon_training_rig/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5712/sr-hex/body-solid_hexagon_training_rig/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/racks-cages/power-racks/');
  })
  it('/commercial/item/5718/sr-dpu/hexagon_double_pull_up/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5718/sr-dpu/hexagon_double_pull_up/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/racks-cages/power-racks/');
  })
  it('/Commercial/Item/5719/SR-FPU/Hexagon_Flying_Pull_Up', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5719/SR-FPU/Hexagon_Flying_Pull_Up/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5719/sr-fpu/hexagon_flying_pull_up/');
  })
  it('/Commercial/Item/5730/SR-STEP/Plyo_Step_Attachment_SR-STEP', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5730/SR-STEP/Plyo_Step_Attachment_SR-STEP/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5730/sr-step/plyo_step_attachment_sr-step/');
  })
  it('/commercial/item/5733/sr-ul/u-link_attachment_sr-ul', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5733/sr-ul/u-link_attachment_sr-ul/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5733/sr-ul/u-link_attachment_sr-ul/');
  })
  it('/commercial/item/5734/sr-wph/hexagon_weight_plate_horn', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5734/sr-wph/hexagon_weight_plate_horn/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5734/sr-wph/hexagon_weight_plate_horn/');
  })
  it('/Commercial/Item/5734/SR-WPH/Weight_Plate_Horn_SR-WPH', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5734/SR-WPH/Weight_Plate_Horn_SR-WPH/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5734/sr-wph/weight_plate_horn_sr-wph/');
  })
  it('/Commercial/Item/5750/RFHU68/Humane_SHOK-LOK_Power_Platform/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5750/RFHU68/Humane_SHOK-LOK_Power_Platform/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5750/RFHU68/Humane_SHOK-LOK_Power_Platform/adeasel.com');
  })
  it('/Commercial/Item/5751/RFHU79/SuperSport__8_x8__4-Piece_Rubber_Flooring_Mat', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5751/RFHU79/SuperSport__8_x8__4-Piece_Rubber_Flooring_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5751/rfhu79/supersport__8_x8__4-piece_rubber_flooring_mat/');
  })
  it('/commercial/item/5754/gab100/body-solid_horizontal_ab_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5754/gab100/body-solid_horizontal_ab_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5754/gab100/body-solid_horizontal_ab_bench/');
  })
  it('/Commercial/Item/5766/KBV/Body-Solid_Vinyl_Dipped_Kettlebells_5-30lbs_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5766/KBV/Body-Solid_Vinyl_Dipped_Kettlebells_5-30lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5766/kbv/body-solid_vinyl_dipped_kettlebells_5-30lbs_/');
  })
  it('/Commercial/Item/5766/KBV/Vinyl_Dipped_Kettlebells/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5766/KBV/Vinyl_Dipped_Kettlebells/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5766/KBV/Vinyl_Dipped_Kettlebells/adeasel.com');
  })
  it('/commercial/item/5791/glgs100p4/body-solid_corner_leverage_gym_package/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5791/glgs100p4/body-solid_corner_leverage_gym_package/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5791/glgs100p4/body-solid_corner_leverage_gym_package/service=/service=/adeasel.com');
  })
  it('/commercial/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service=/');
  })
  it('/commercial/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5791/glgs100p4/body-solid_glgs100_corner_leverage_gym_with_bench/service=/service=/');
  })
  it('/commercial/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/adeasel.com');
  })
  it('/commercial/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5793/glgs100/body-solid_glgs100_corner_leverage_gym/service=/service=/');
  })
  it('/commercial/item/5796/lu7/landice_u7_upright_bike/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5796/lu7/landice_u7_upright_bike/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5796/lu7/landice_u7_upright_bike/service=/service=/');
  })
  it('/commercial/item/5798/gsr10/body-solid_gsr10_stability_ball_rack', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5798/gsr10/body-solid_gsr10_stability_ball_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5798/gsr10/body-solid_gsr10_stability_ball_rack/');
  })
  it('/Commercial/Item/5798/GSR10/Body-Solid_Stability_Ball_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5798/GSR10/Body-Solid_Stability_Ball_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5798/gsr10/body-solid_stability_ball_rack/');
  })
  it('/Commercial/Item/5904/BSTROC/Roepke_Aluminum_Olympic_Collars', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5904/BSTROC/Roepke_Aluminum_Olympic_Collars/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5904/bstroc/roepke_aluminum_olympic_collars/');
  })
  it('/commercial/item/5989/gpr378p4/body-solid_power_rack_lat_package_with_bench/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5989/gpr378p4/body-solid_power_rack_lat_package_with_bench/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5989/gpr378p4/body-solid_power_rack_lat_package_with_bench/service=/');
  })
  it('/commercial/item/5989/gpr378p4/body-solid_power_rack_package_with_lat', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5989/gpr378p4/body-solid_power_rack_package_with_lat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5989/gpr378p4/body-solid_power_rack_package_with_lat/');
  })
  it('/commercial/item/6076/9b3u/endurance_b3u_self-generating_upright_bike_floor_model', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6076/9b3u/endurance_b3u_self-generating_upright_bike_floor_model/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6076/9b3u/endurance_b3u_self-generating_upright_bike_floor_model/');
  })
  it('/Commercial/Item/6145/GBR10/Body-Solid_Ball_Rebounder/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6145/GBR10/Body-Solid_Ball_Rebounder/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6145/GBR10/Body-Solid_Ball_Rebounder/adeasel.com');
  })
  it('/commercial/item/6146/vx-brt/vectra_brt_body_resistability_stretch_trainer/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6146/vx-brt/vectra_brt_body_resistability_stretch_trainer/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6146/vx-brt/vectra_brt_body_resistability_stretch_trainer/service=/adeasel.com');
  })
  it('/commercial/item/6152/vx-28/210/vectra_vx-28_two_stack_210lb__multi-station_gym/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6152/vx-28/210/vectra_vx-28_two_stack_210lb__multi-station_gym/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6152/vx-28/210/vectra_vx-28_two_stack_210lb__multi-station_gym/service=/service=/adeasel.com');
  })
  it('/Commercial/Item/6159/BFPR100-PACK1/Best_Fitness_BFPR100_Power_Rack_Package_1', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6159/BFPR100-PACK1/Best_Fitness_BFPR100_Power_Rack_Package_1/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6159/bfpr100-pack1/best_fitness_bfpr100_power_rack_package_1/');
  })
  it('/Commercial/Item/6159/BFPR100-PACK1/Best_Fitness_Power_Rack_Package_1_with_Bench__Weight_Set', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6159/BFPR100-PACK1/Best_Fitness_Power_Rack_Package_1_with_Bench__Weight_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6159/bfpr100-pack1/best_fitness_power_rack_package_1_with_bench__weight_set/');
  })
  it('/Commercial/Item/6160/BFPR100-PACK2/Best_Fitness_Power_Rack_Package_2_with_Bench__300lb__Weight_Set', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6160/BFPR100-PACK2/Best_Fitness_Power_Rack_Package_2_with_Bench__300lb__Weight_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6160/bfpr100-pack2/best_fitness_power_rack_package_2_with_bench__300lb__weight_set/');
  })
  it('/Commercial/Item/6181/HWHVP/Hyperwear_Pro_Weight_Vest', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6181/HWHVP/Hyperwear_Pro_Weight_Vest/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6181/hwhvp/hyperwear_pro_weight_vest/');
  })
  it('/commercial/item/6202/obpc/rubber_bumper_plates_-_color/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6202/obpc/rubber_bumper_plates_-_color/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6202/obpc/rubber_bumper_plates_-_color/adeasel.com');
  })
  it('/Commercial/Item/6227/KBS/Body-Solid_Iron_Kettlebell_Sets', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6227/KBS/Body-Solid_Iron_Kettlebell_Sets/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6227/kbs/body-solid_iron_kettlebell_sets/');
  })
  it('/commercial/item/6228/kbcs/premium_chrome_kettlebell_sets/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6228/kbcs/premium_chrome_kettlebell_sets/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6228/kbcs/premium_chrome_kettlebell_sets/adeasel.com');
  })
  it('/commercial/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6241/gdr363-sdp/body-solid_5-40lb__round_dumbbell_package_with_rack/service=/service=/');
  })
  it('/Commercial/Item/6252/FEXS/Encore_Xtreme_Set', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6252/FEXS/Encore_Xtreme_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6252/fexs/encore_xtreme_set/');
  })
  it('/commercial/item/6308/9sptcb900/spirit_cb900_indoor_cycle_floor_model', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6308/9sptcb900/spirit_cb900_indoor_cycle_floor_model/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6308/9sptcb900/spirit_cb900_indoor_cycle_floor_model/');
  })
  it('/commercial/item/6311/truts1000e/true_spectrum_elliptical/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6311/truts1000e/true_spectrum_elliptical/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6311/truts1000e/true_spectrum_elliptical/service=/service=/adeasel.com');
  })
  it('/commercial/item/6321/sdkr500sd/pro_clubline_modular_storage_rack__2_saddle_tiers_', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6321/sdkr500sd/pro_clubline_modular_storage_rack__2_saddle_tiers_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6321/sdkr500sd/pro_clubline_modular_storage_rack__2_saddle_tiers_/');
  })
  it('/Commercial/Item/6329/S2CCO/Pro_ClubLine_Series_2_S2CCO_Cable_Crossover/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6329/S2CCO/Pro_ClubLine_Series_2_S2CCO_Cable_Crossover/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6329/S2CCO/Pro_ClubLine_Series_2_S2CCO_Cable_Crossover/adeasel.com');
  })
  it('/Commercial/Item/6335/PPR200XFFP1/Powerline_Power_Rack_PPR200X_Package__Bench__Lat__Mat', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6335/PPR200XFFP1/Powerline_Power_Rack_PPR200X_Package__Bench__Lat__Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6335/ppr200xffp1/powerline_power_rack_ppr200x_package__bench__lat__mat/');
  })
  it('/Commercial/Item/6342/SPR1000FFP1/Body-Solid_SPR1000_Power_Rack_Pack_with_Weight_Set', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6342/SPR1000FFP1/Body-Solid_SPR1000_Power_Rack_Pack_with_Weight_Set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6342/spr1000ffp1/body-solid_spr1000_power_rack_pack_with_weight_set/');
  })
  it('/commercial/item/6342/spr1000ffp1/body-solid_spr1000_power_rack_with_weight_set/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6342/spr1000ffp1/body-solid_spr1000_power_rack_with_weight_set/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6342/spr1000ffp1/body-solid_spr1000_power_rack_with_weight_set/service=/');
  })
  it('/Commercial/Item/6349/SPR1000GG1/Garage_Gym_Package_GG1', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6349/SPR1000GG1/Garage_Gym_Package_GG1/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6349/spr1000gg1/garage_gym_package_gg1/');
  })
  it('/Commercial/Item/6382/OBPX/Chicago_Extreme_Olympic_Bumper_Plates', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/6382/OBPX/Chicago_Extreme_Olympic_Bumper_Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6382/obpx/chicago_extreme_olympic_bumper_plates/');
  })
  it('/commercial/item/6433/obpx260/260_lb__chicago_extreme_bumper_plate_set/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6433/obpx260/260_lb__chicago_extreme_bumper_plate_set/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6433/obpx260/260_lb__chicago_extreme_bumper_plate_set/service=/service=/');
  })
  it('/commercial/item/6496/spr500p2/body-solid_half_rack_with_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/6496/spr500p2/body-solid_half_rack_with_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/6496/spr500p2/body-solid_half_rack_with_bench/');
  })
  it('/concept-2', () => {
    cy.visit('https://fitnessfactory.com/concept-2/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/concept-2/');
  })
  it('/core-home-fitness', () => {
    cy.visit('https://fitnessfactory.com/core-home-fitness/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/core-home-fitness/');
  })
  it('/free-weights/ost-300lb', () => {
    cy.visit('https://fitnessfactory.com/free-weights/ost-300lb/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/ost-300lb/');
  })
  it('/Home/Accessories', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/');
  })
  it('/Home/Accessories/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/Accessories/adeasel.com');
  })
  it('/home/accessories/balance-balls-bars-steps', () => {
    cy.visit('https://fitnessfactory.com/home/accessories/balance-balls-bars-steps/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/balance-balls-bars-steps/');
  })
  it('/home/Accessories/Belts-Grips-and-Harnesses', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Belts-Grips-and-Harnesses', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/belts-grips-and-harnesses/');
  })
  it('/home/accessories/belts-grips-and-harnesses', () => {
    cy.visit('https://fitnessfactory.com/home/accessories/belts-grips-and-harnesses/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/belts-grips-and-harnesses/');
  })
  it('/Home/Accessories/Boxes', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/Boxes', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/boxes/');
  })
  it('/home/accessories/boxes', () => {
    cy.visit('https://fitnessfactory.com/home/accessories/boxes/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/boxes/');
  })
  it('/Home/Accessories/Cable-Attachments', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/Cable-Attachments', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/weight-machines/cable-attachments/');
  })
  it('/home/Accessories/Cable-Attachments', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Cable-Attachments', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/weight-machines/cable-attachments/');
  })
  it('/Home/Accessories/Foam-Rollers', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/Foam-Rollers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/foam-rollers/');
  })
  it('/home/Accessories/Gym-Flooring-and-Mats', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Gym-Flooring-and-Mats', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/gym-flooring-and-mats/');
  })
  it('/home/Accessories/Media-and-Electronics', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Media-and-Electronics', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/media-and-electronics/');
  })
  it('/home/Accessories/Resistance-Bands', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Resistance-Bands', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/resistance-bands/');
  })
  it('/Home/Accessories/Resistance-Bands', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/Resistance-Bands', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/resistance-bands/');
  })
  it('/home/Accessories/Resistance-Bands', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Resistance-Bands/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/resistance-bands/');
  })
  it('/home/Accessories/Rubber-Flooring-and-Mats', () => {
    cy.visit('https://fitnessfactory.com/home/Accessories/Rubber-Flooring-and-Mats', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/rubber-flooring-and-mats/');
  })
  it('/home/accessories/rubber-flooring-and-mats', () => {
    cy.visit('https://fitnessfactory.com/home/accessories/rubber-flooring-and-mats', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/rubber-flooring-and-mats/');
  })
  it('/Home/Accessories/Weight-Lifting-Gloves-Straps-Wraps', () => {
    cy.visit('https://fitnessfactory.com/Home/Accessories/Weight-Lifting-Gloves-Straps-Wraps', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/weight-lifting-gloves-straps-wraps/');
  })
  it('/Home/Best-Fitness/Best-Fitness', () => {
    cy.visit('https://fitnessfactory.com/Home/Best-Fitness/Best-Fitness', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/best-fitness/');
  })
  it('/Home/Body-Solid/Body-Solid-Weights', () => {
    cy.visit('https://fitnessfactory.com/Home/Body-Solid/Body-Solid-Weights', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/body-solid-iron/');
  })
  it('/Home/Body-Solid-Iron', () => {
    cy.visit('https://fitnessfactory.com/Home/Body-Solid-Iron', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/body-solid-iron/');
  })
  it('/Home/Cardio-Machines/Spin-Bikes', () => {
    cy.visit('https://fitnessfactory.com/Home/Cardio-Machines/Spin-Bikes', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cardio-machines/spin-bikes/');
  })
  it('/Home/Cardio-Machines/Stair-Climbers', () => {
    cy.visit('https://fitnessfactory.com/Home/Cardio-Machines/Stair-Climbers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cardio-machines/stair-climbers/');
  })
  it('/Home/Concept-2', () => {
    cy.visit('https://fitnessfactory.com/Home/Concept-2', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/concept-2/');
  })
  it('/Home/Core-Home-Fitness', () => {
    cy.visit('https://fitnessfactory.com/Home/Core-Home-Fitness', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/core-home-fitness/');
  })
  it('/home/Cross-Training/Ab-Bench-Roman-Chair', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Ab-Bench-Roman-Chair', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/ab-bench-roman-chair/');
  })
  it('/home/Cross-Training/Back-Ham-Glute-Machines', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Back-Ham-Glute-Machines', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/back-ham-glute-machines/');
  })
  it('/home/cross-training/back-ham-glute-machines', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/back-ham-glute-machines/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/back-ham-glute-machines/');
  })
  it('/home/Cross-Training/Dual-Action-Fan-Bike-and-Rowers', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Dual-Action-Fan-Bike-and-Rowers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/dual-action-fan-bike-and-rowers/');
  })
  it('/home/Cross-Training/Fan-Bikes-Rowers-Steppers', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Fan-Bikes-Rowers-Steppers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/fan-bikes-rowers-steppers/');
  })
  it('/Home/Cross-Training/Fan-Bikes-Rowers-Steppers', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Fan-Bikes-Rowers-Steppers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/fan-bikes-rowers-steppers/');
  })
  it('/home/Cross-Training/Fan-Bikes-Rowers-Steppers', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Fan-Bikes-Rowers-Steppers/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/fan-bikes-rowers-steppers/');
  })
  it('/home/cross-training/Glute-Ham-Ab-Back-Roman-Chair', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/Glute-Ham-Ab-Back-Roman-Chair/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/glute-ham-ab-back-roman-chair/');
  })
  it('/home/cross-training/knee-raise-dips', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/knee-raise-dips/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/knee-raise-dips/');
  })
  it('/home/Cross-Training/Olympic-and-Bumper-Plates', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Olympic-and-Bumper-Plates', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-and-bumper-plates/');
  })
  it('/Home/Cross-Training/Olympic-and-Bumper-Plates', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Olympic-and-Bumper-Plates', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-and-bumper-plates/');
  })
  it('/home/cross-training/Olympic-and-Bumper-Plates', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/Olympic-and-Bumper-Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-and-bumper-plates/');
  })
  it('/home/cross-training/olympic-bars-collars/?term&queryID=284&action=subcategorysearch&submit=GO&querySortOrder=0', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/olympic-bars-collars/?term&queryID=284&action=subcategorysearch&submit=GO&querySortOrder=0', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-bars-collars/?term&queryID=284&action=subcategorysearch&submit=GO&querySortOrder=0');
  })
  it('/Home/Cross-Training/Olympic-Bumper-Plates', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Olympic-Bumper-Plates', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-bumper-plates/');
  })
  it('/Home/Cross-Training/Olympic-Plates-Bumper-Plates', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Olympic-Plates-Bumper-Plates', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/olympic-plates-bumper-plates/');
  })
  it('/home/cross-training/Power-Racks-Squat-Racks-and-Rigs', () => {
    cy.visit('https://fitnessfactory.com/home/cross-training/Power-Racks-Squat-Racks-and-Rigs/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/power-racks-squat-racks-and-rigs/');
  })
  it('/home/Cross-Training/Pull-Up-Towers', () => {
    cy.visit('https://fitnessfactory.com/home/Cross-Training/Pull-Up-Towers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/pull-up-towers/');
  })
  it('/Home/Cross-Training/Pull-Up-Towers', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Pull-Up-Towers', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/pull-up-towers/');
  })
  it('/Home/Cross-Training/Training-Accessories', () => {
    cy.visit('https://fitnessfactory.com/Home/Cross-Training/Training-Accessories/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/cross-training/training-accessories/');
  })
  it('/home/gift-guide/50-and-under', () => {
    cy.visit('https://fitnessfactory.com/home/gift-guide/50-and-under/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/gift-guide/50-and-under/');
  })
  it('/Home/Gift-Guide/Under-$500', () => {
    cy.visit('https://fitnessfactory.com/Home/Gift-Guide/Under-$500/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/gift-guide/under-$500/');
  })
  it('/home/Hand-X-Band/Grip-Strengtheners', () => {
    cy.visit('https://fitnessfactory.com/home/Hand-X-Band/Grip-Strengtheners', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/fitness-gear/');
  })
  it('/home/hand-x-band/grip-strengtheners', () => {
    cy.visit('https://fitnessfactory.com/home/hand-x-band/grip-strengtheners/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/accessories/fitness-gear/');
  })
  it('/Home/Humane', () => {
    cy.visit('https://fitnessfactory.com/Home/Humane', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/humane/');
  })
  it('/home/item/10062/tbr50/body-solid_tools_landmine_base_plate', () => {
    cy.visit('https://fitnessfactory.com/home/item/10062/tbr50/body-solid_tools_landmine_base_plate/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10062/tbr50/body-solid_tools_landmine_base_plate/');
  })
  it('/home/item/10071/orst400kit/400lb__rubber_grip_olympic_weight_set_with_rugged_olympic_bar_and_weight_tree', () => {
    cy.visit('https://fitnessfactory.com/home/item/10071/orst400kit/400lb__rubber_grip_olympic_weight_set_with_rugged_olympic_bar_and_weight_tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-sets/');
  })
  it('/Home/Item/10072/ORST300KIT/300lb__Rubber_Grip_Olympic_Weight_Set_with_Rugged_Olympic_Bar_and_Weight_Tree', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/10072/ORST300KIT/300lb__Rubber_Grip_Olympic_Weight_Set_with_Rugged_Olympic_Bar_and_Weight_Tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-sets/');
  })
  it('/home/item/10072/orst300kit/300lb__rubber_grip_olympic_weight_set_with_rugged_olympic_bar_and_weight_tree', () => {
    cy.visit('https://fitnessfactory.com/home/item/10072/orst300kit/300lb__rubber_grip_olympic_weight_set_with_rugged_olympic_bar_and_weight_tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-sets/');
  })
  it('/home/item/10076/osb300kit/300lb__olympic_weight_set_with_olympic_bar_and_weight_tree', () => {
    cy.visit('https://fitnessfactory.com/home/item/10076/osb300kit/300lb__olympic_weight_set_with_olympic_bar_and_weight_tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-sets/');
  })
  it('/home/item/10084/9trumscb/true_indoor_cycling_bike_floor_model', () => {
    cy.visit('https://fitnessfactory.com/home/item/10084/9trumscb/true_indoor_cycling_bike_floor_model/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10084/9trumscb/true_indoor_cycling_bike_floor_model/');
  })
  it('/Home/Item/10111/GIOT9/Body-Solid_Inner-Outer_Thigh_Attachment_for_the_G9S', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/10111/GIOT9/Body-Solid_Inner-Outer_Thigh_Attachment_for_the_G9S/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10111/giot9/body-solid_inner-outer_thigh_attachment_for_the_g9s/');
  })
  it('/home/item/10111/giot9/body-solid_inner-outer_thigh_attachment_for_the_g9s', () => {
    cy.visit('https://fitnessfactory.com/home/item/10111/giot9/body-solid_inner-outer_thigh_attachment_for_the_g9s/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10111/giot9/body-solid_inner-outer_thigh_attachment_for_the_g9s/');
  })
  it('/Home/Item/10139/GLP2500/Body-Solid_EXM2500_Leg_Press_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/10139/GLP2500/Body-Solid_EXM2500_Leg_Press_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10139/glp2500/body-solid_exm2500_leg_press_attachment/');
  })
  it('/home/item/10139/glp2500/body-solid_exm2500_leg_press_attachment', () => {
    cy.visit('https://fitnessfactory.com/home/item/10139/glp2500/body-solid_exm2500_leg_press_attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/10139/glp2500/body-solid_exm2500_leg_press_attachment/');
  })
  it('/home/item/11154/ob86lpb/body-solid_rebel_olympic_bar', () => {
    cy.visit('https://fitnessfactory.com/home/item/11154/ob86lpb/body-solid_rebel_olympic_bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/11154/ob86lpb/body-solid_rebel_olympic_bar/');
  })
  it('/Home/Item/11154/OB86LPB/Body-Solid_Rebel_Olympic_Bar', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/11154/OB86LPB/Body-Solid_Rebel_Olympic_Bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/11154/ob86lpb/body-solid_rebel_olympic_bar/');
  })
  it('/Home/Item/11192/T150B25U/Endurance_Cardio_Combo_T150_Treadmill_with_B2_5U_Upright_Bike', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/11192/T150B25U/Endurance_Cardio_Combo_T150_Treadmill_with_B2_5U_Upright_Bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/11192/t150b25u/endurance_cardio_combo_t150_treadmill_with_b2_5u_upright_bike/');
  })
  it('/Home/Item/12231/9B25U-FP/Endurance_B2_5_Electronic_Upright_Bike_Floor_Model_Forest_Park', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/12231/9B25U-FP/Endurance_B2_5_Electronic_Upright_Bike_Floor_Model_Forest_Park/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/12231/9b25u-fp/endurance_b2_5_electronic_upright_bike_floor_model_forest_park/');
  })
  it('/home/item/14275/exm2500b/body-solid_exm2500b_home_gym', () => {
    cy.visit('https://fitnessfactory.com/home/item/14275/exm2500b/body-solid_exm2500b_home_gym/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/14275/exm2500b/body-solid_exm2500b_home_gym/');
  })
  it('/home/item/16512/hft-st/bodycraft_hft_speed_trainer', () => {
    cy.visit('https://fitnessfactory.com/home/item/16512/hft-st/bodycraft_hft_speed_trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/16512/hft-st/bodycraft_hft_speed_trainer/');
  })
  it('/home/item/16515/prow/bodycraft_power_row_attachment', () => {
    cy.visit('https://fitnessfactory.com/home/item/16515/prow/bodycraft_power_row_attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/16515/prow/bodycraft_power_row_attachment/');
  })
  it('/Home/Item/17764/9a-4r/Star_Trac_Series_4_Recumbent_Bike_Floor_Model__Aurora', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/17764/9a-4r/Star_Trac_Series_4_Recumbent_Bike_Floor_Model__Aurora/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/17764/9a-4r/star_trac_series_4_recumbent_bike_floor_model__aurora/');
  })
  it('/Home/Item/17765/9a-4u/Star_Trac_Series_4_Upright_Bike_LCD_Screen_Floor_Model__Aurora', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/17765/9a-4u/Star_Trac_Series_4_Upright_Bike_LCD_Screen_Floor_Model__Aurora/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/17765/9a-4u/star_trac_series_4_upright_bike_lcd_screen_floor_model__aurora/');
  })
  it('/Home/Item/17767/9a-4t/Star_Trac_Series_4_Treadmill_Floor_Model__Aurora', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/17767/9a-4t/Star_Trac_Series_4_Treadmill_Floor_Model__Aurora/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/star-trac/');
  })
  it('/Home/Item/19009/9a-CE800ENT/Spirit_CE800ENT_Touchscreen_Elliptical_Floor_Model__Aurora', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/19009/9a-CE800ENT/Spirit_CE800ENT_Touchscreen_Elliptical_Floor_Model__Aurora/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/19009/9a-ce800ent/spirit_ce800ent_touchscreen_elliptical_floor_model__aurora/');
  })
})
