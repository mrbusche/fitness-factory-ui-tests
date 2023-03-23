describe('Test redirects', () => {
  it('/accessories/cable-attachments-and-handles', () => {
    cy.visit('https://fitnessfactory.com/accessories/cable-attachments-and-handles/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/weight-machines/cable-attachments/');
  })
  it('/best-fitness/best-fitness', () => {
    cy.visit('https://fitnessfactory.com/best-fitness/best-fitness/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/best-fitness/');
  })
  it('/body-solid/body-solid-weights', () => {
    cy.visit('https://fitnessfactory.com/body-solid/body-solid-weights/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/body-solid-iron/');
  })
  it('/body-solid-iron', () => {
    cy.visit('https://fitnessfactory.com/body-solid-iron/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/brand/body-solid-iron/');
  })
  it('/commercial/item/2975/fid46/body-solid_heavy_duty_leverage_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/2975/fid46/body-solid_heavy_duty_leverage_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2975/fid46/body-solid_heavy_duty_leverage_bench/');
  })
  it('/commercial/item/2975/fid46/body-solid_leverage_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/2975/fid46/body-solid_leverage_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2975/fid46/body-solid_leverage_bench/');
  })
  it('/Commercial/Item/2980/LBB28/Lat_Blaster_Bar', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/2980/LBB28/Lat_Blaster_Bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2980/lbb28/lat_blaster_bar/');
  })
  it('/Commercial/Item/2995/MA325/Leather_Triceps_Strap', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/2995/MA325/Leather_Triceps_Strap/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2995/ma325/leather_triceps_strap/');
  })
  it('/commercial/item/2997/8exm1500s/body-solid_exm1500s_home_gym-refurbished', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/2997/8exm1500s/body-solid_exm1500s_home_gym-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2997/8exm1500s/body-solid_exm1500s_home_gym-refurbished/');
  })
  it('/Commercial/Item/3005/OC06/Olympic_Spring_Collar', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3005/OC06/Olympic_Spring_Collar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3005/oc06/olympic_spring_collar/');
  })
  it('/commercial/item/3006/8exm3000lps/body-solid_exm3000lps_double_stack_gym-refurbished', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3006/8exm3000lps/body-solid_exm3000lps_double_stack_gym-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3006/8exm3000lps/body-solid_exm3000lps_double_stack_gym-refurbished/');
  })
  it('/commercial/item/3008/exm4000s/body-solid_exm4000_triple_stack_gym/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3008/exm4000s/body-solid_exm4000_triple_stack_gym/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3008/exm4000s/body-solid_exm4000_triple_stack_gym/service=/');
  })
  it('/commercial/item/3012/g10b/body-solid_g10b_ultimate_bi-angular_gym/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3012/g10b/body-solid_g10b_ultimate_bi-angular_gym/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3012/g10b/body-solid_g10b_ultimate_bi-angular_gym/service=/service=/adeasel.com');
  })
  it('/Commercial/Item/3027/OPB/Olympic_Iron_Weight_Plates', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3027/OPB/Olympic_Iron_Weight_Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3027/opb/olympic_iron_weight_plates/');
  })
  it('/Commercial/Item/3047/RF36T/Vinyl_Floor_Mat_3x6_-6_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3047/RF36T/Vinyl_Floor_Mat_3x6_-6_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3047/rf36t/vinyl_floor_mat_3x6_-6_/');
  })
  it('/Commercial/Item/3049/RPB/Standard_Cast_Iron_Weight_Plates', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3049/RPB/Standard_Cast_Iron_Weight_Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3049/rpb/standard_cast_iron_weight_plates/');
  })
  it('/Commercial/Item/3054/SDX/Hex_Iron_Dumbbells_1-100_lbs_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3054/SDX/Hex_Iron_Dumbbells_1-100_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3054/sdx/hex_iron_dumbbells_1-100_lbs_/');
  })
  it('/commercial/item/3062/sh22/shoulder_horn_harness', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3062/sh22/shoulder_horn_harness/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3062/sh22/shoulder_horn_harness/');
  })
  it('/Commercial/Item/3064/SWT14/Weight_Tree_SWT14__Standard_Size_Plates', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3064/SWT14/Weight_Tree_SWT14__Standard_Size_Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3064/swt14/weight_tree_swt14__standard_size_plates/');
  })
  it('/Commercial/Item/3088/LP40S/LP40S_Leg_Press_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3088/LP40S/LP40S_Leg_Press_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3088/lp40s/lp40s_leg_press_attachment/');
  })
  it('/commercial/item/3091/sp200/200_lb__selectorized_weight_stack/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3091/sp200/200_lb__selectorized_weight_stack/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3091/sp200/200_lb__selectorized_weight_stack/adeasel.com');
  })
  it('/commercial/item/3091/sp200/200_lb__selectorized_weight_stack/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3091/sp200/200_lb__selectorized_weight_stack/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3091/sp200/200_lb__selectorized_weight_stack/service=/');
  })
  it('/commercial/item/3099/ma310/leather_dipping_strap_with_chain', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3099/ma310/leather_dipping_strap_with_chain/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3099/ma310/leather_dipping_strap_with_chain/');
  })
  it('/commercial/item/3108/pro/pro_style_dumbbells_5-120_lbs_', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3108/pro/pro_style_dumbbells_5-120_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3108/pro/pro_style_dumbbells_5-120_lbs_/');
  })
  it('/commercial/item/3154/8gcbt380/body-solid_gcbt380_bicep_tricep_machine-refurbished', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3154/8gcbt380/body-solid_gcbt380_bicep_tricep_machine-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3154/8gcbt380/body-solid_gcbt380_bicep_tricep_machine-refurbished/');
  })
  it('/Commercial/Item/3154/GCBT380/Body-Solid_GCBT380_Bicep_Tricep_Machine', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3154/GCBT380/Body-Solid_GCBT380_Bicep_Tricep_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3154/gcbt380/body-solid_gcbt380_bicep_tricep_machine/');
  })
  it('/commercial/item/3163/8glph1100/body-solid_glph1100_leg_press_hack_squat-refurbished', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3163/8glph1100/body-solid_glph1100_leg_press_hack_squat-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3163/8glph1100/body-solid_glph1100_leg_press_hack_squat-refurbished/');
  })
  it('/Commercial/Item/3163/GLPH1100/Body-Solid_GLPH1100_Leg_Press_Hack_Squat', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3163/GLPH1100/Body-Solid_GLPH1100_Leg_Press_Hack_Squat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3163/glph1100/body-solid_glph1100_leg_press_hack_squat/');
  })
  it('/Commercial/Item/3175/GDR363/Body-Solid_GDR363_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3175/GDR363/Body-Solid_GDR363_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3175/gdr363/body-solid_gdr363_dumbbell_rack/');
  })
  it('/commercial/item/3179/gowt/weight_tree_and_bar_holder_-_olympic', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3179/gowt/weight_tree_and_bar_holder_-_olympic/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3179/gowt/weight_tree_and_bar_holder_-_olympic/');
  })
  it('/Commercial/Item/3218/DPRS-/ProDual_DPRS_Multi_Press_Machine', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3218/DPRS-/ProDual_DPRS_Multi_Press_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3218/dprs-/produal_dprs_multi_press_machine/');
  })
  it('/Commercial/Item/3221/GDCC200/Body-Solid_GDCC200_Selectorized_Functional_Trainer', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3221/GDCC200/Body-Solid_GDCC200_Selectorized_Functional_Trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3221/gdcc200/body-solid_gdcc200_selectorized_functional_trainer/');
  })
  it('/Commercial/Item/3222/GDCC250/Body-Solid_GDCC250_Selectorized_Cable_Crossover', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3222/GDCC250/Body-Solid_GDCC250_Selectorized_Cable_Crossover/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3222/gdcc250/body-solid_gdcc250_selectorized_cable_crossover/');
  })
  it('/commercial/item/3225/produal-dclp/body-solid_produal_leg_calf_press', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3225/produal-dclp/body-solid_produal_leg_calf_press/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3225/produal-dclp/body-solid_produal_leg_calf_press/');
  })
  it('/Commercial/Item/3226/DLEC-/ProDual_DLEC_Leg_Extension_Curl_Machine', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3226/DLEC-/ProDual_DLEC_Leg_Extension_Curl_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3226/dlec-/produal_dlec_leg_extension_curl_machine/');
  })
  it('/Commercial/Item/3227/DIOT-/ProDual_DIOT_Inner_Outer_Thigh_Machine', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3227/DIOT-/ProDual_DIOT_Inner_Outer_Thigh_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3227/diot-/produal_diot_inner_outer_thigh_machine/');
  })
  it('/commercial/item/3229/produal-dlat/body-solid_produal_lat_mid_row/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3229/produal-dlat/body-solid_produal_lat_mid_row/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3229/produal-dlat/body-solid_produal_lat_mid_row/service=/');
  })
  it('/commercial/item/3236/giot-stk/pro-select_inner_outer_thigh/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3236/giot-stk/pro-select_inner_outer_thigh/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3236/giot-stk/pro-select_inner_outer_thigh/service=/service=/adeasel.com');
  })
  it('/commercial/item/3243/kb/body-solid_iron_kettlebells_5-100_lbs_', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3243/kb/body-solid_iron_kettlebells_5-100_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3243/kb/body-solid_iron_kettlebells_5-100_lbs_/');
  })
  it('/commercial/item/3259/dpcc-/produal_dpcc_cable_column_machine/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3259/dpcc-/produal_dpcc_cable_column_machine/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3259/dpcc-/produal_dpcc_cable_column_machine/service=/');
  })
  it('/commercial/item/3261/bfhyp10r/best_fitness_hyper_ab_board', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3261/bfhyp10r/best_fitness_hyper_ab_board/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3261/bfhyp10r/best_fitness_hyper_ab_board/');
  })
  it('/Commercial/Item/3267/PDR282X/Powerline_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3267/PDR282X/Powerline_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3267/pdr282x/powerline_dumbbell_rack/');
  })
  it('/commercial/item/3267/pdr282x/powerline_pdr282x_dumbbell_rack', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3267/pdr282x/powerline_pdr282x_dumbbell_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3267/pdr282x/powerline_pdr282x_dumbbell_rack/');
  })
  it('/commercial/item/3267/pdr282x/powerline_pdr282x_horizontal_dumbbell_rack', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3267/pdr282x/powerline_pdr282x_horizontal_dumbbell_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3267/pdr282x/powerline_pdr282x_horizontal_dumbbell_rack/');
  })
  it('/Commercial/Item/3270/PLA144X/Powerline_PLA144X_Lat_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3270/PLA144X/Powerline_PLA144X_Lat_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3270/pla144x/powerline_pla144x_lat_attachment/');
  })
  it('/Commercial/Item/3281/PPR200X/Powerline_PPR200X_Power_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3281/PPR200X/Powerline_PPR200X_Power_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3281/ppr200x/powerline_ppr200x_power_rack/');
  })
  it('/Commercial/Item/3287/BFFID10/Best_Fitness_BFFID10_Folding_Weight_Bench', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3287/BFFID10/Best_Fitness_BFFID10_Folding_Weight_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3287/bffid10/best_fitness_bffid10_folding_weight_bench/');
  })
  it('/Commercial/Item/3309/SPTXBR95/Spirit_XBR95_Recumbent_Bike_Trainer/service', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3309/SPTXBR95/Spirit_XBR95_Recumbent_Bike_Trainer/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3309/sptxbr95/spirit_xbr95_recumbent_bike_trainer/service=/');
  })
  it('/Commercial/Item/3337/PHG1000X/Powerline_Hardcore_Gym', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3337/PHG1000X/Powerline_Hardcore_Gym/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3337/phg1000x/powerline_hardcore_gym/');
  })
  it('/Commercial/Item/3337/PHG1000X/Powerline_Hardcore_Gym/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3337/PHG1000X/Powerline_Hardcore_Gym/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/Item/3337/PHG1000X/Powerline_Hardcore_Gym/adeasel.com');
  })
  it('/commercial/item/3342/sib359g/pro_clubline_incline_press_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3342/sib359g/pro_clubline_incline_press_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/Commercial/Item/3343/SDB351G/Pro_ClubLine_SDB351G_Heavy_Duty_Decline_Bench', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3343/SDB351G/Pro_ClubLine_SDB351G_Heavy_Duty_Decline_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/commercial/item/3344/sfb349g/body-solid_proclub_flat_bench', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3344/sfb349g/body-solid_proclub_flat_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/Commercial/Item/3345/LVBP/Pro_ClubLine_LVBP_Leverage_Bench_Press', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3345/LVBP/Pro_ClubLine_LVBP_Leverage_Bench_Press/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3345/lvbp/pro_clubline_lvbp_leverage_bench_press/');
  })
  it('/Commercial/Item/3346/LVIP/Pro_ClubLine_LVIP_Leverage_Incline_Press', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3346/LVIP/Pro_ClubLine_LVIP_Leverage_Incline_Press/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3346/lvip/pro_clubline_lvip_leverage_incline_press/');
  })
  it('/Commercial/Item/3347/LVSP/Pro_ClubLine_LVSP_Leverage_Shoulder_Press', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3347/LVSP/Pro_ClubLine_LVSP_Leverage_Shoulder_Press/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3347/lvsp/pro_clubline_lvsp_leverage_shoulder_press/');
  })
  it('/commercial/item/3350/lvle/pro_clubline_lvle_leverage_leg_extension/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3350/lvle/pro_clubline_lvle_leverage_leg_extension/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3350/lvle/pro_clubline_lvle_leverage_leg_extension/service=/service=/');
  })
  it('/Commercial/Item/3351/LVLC/Pro_ClubLine_LVLC_Leverage_Leg_Curl', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3351/LVLC/Pro_ClubLine_LVLC_Leverage_Leg_Curl/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3351/lvlc/pro_clubline_lvlc_leverage_leg_curl/');
  })
  it('/Commercial/Item/3363/GDKR100/Body-Solid_GDKR100_Dumbbell_Kettlebell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3363/GDKR100/Body-Solid_GDKR100_Dumbbell_Kettlebell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3363/gdkr100/body-solid_gdkr100_dumbbell_kettlebell_rack/');
  })
  it('/Commercial/Item/3364/GAB350/Body-Solid_GAB350_Semi-Recumbent_Dual_Ab_Bench', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3364/GAB350/Body-Solid_GAB350_Semi-Recumbent_Dual_Ab_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3364/gab350/body-solid_gab350_semi-recumbent_dual_ab_bench/');
  })
  it('/commercial/item/3384/dpls-/produal_dpls_press_arm_machine/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3384/dpls-/produal_dpls_press_arm_machine/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3384/dpls-/produal_dpls_press_arm_machine/service=/');
  })
  it('/commercial/item/3444/govts3/go__vitality_dvd_series', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3444/govts3/go__vitality_dvd_series/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3444/govts3/go__vitality_dvd_series/');
  })
  it('/Commercial/Item/3517/BSTVD/Vinyl_Dumbbells_1-15lbs_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3517/BSTVD/Vinyl_Dumbbells_1-15lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3517/bstvd/vinyl_dumbbells_1-15lbs_/');
  })
  it('/commercial/item/3520/wsp200/200lb__selectorized_premium_weight_stack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3520/wsp200/200lb__selectorized_premium_weight_stack/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3520/wsp200/200lb__selectorized_premium_weight_stack/service=/service=/');
  })
  it('/Commercial/Item/3528/KB535SET/Body-Solid_Kettlebell_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3528/KB535SET/Body-Solid_Kettlebell_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3528/kb535set/body-solid_kettlebell_package/');
  })
  it('/Commercial/Item/3528/KB535SET/Kettlebells_with_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3528/KB535SET/Kettlebells_with_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3528/kb535set/kettlebells_with_rack_package/');
  })
  it('/commercial/item/3529/kb1070set/double_kettlebells_with_rack_package/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3529/kb1070set/double_kettlebells_with_rack_package/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3529/kb1070set/double_kettlebells_with_rack_package/service=/service=/');
  })
  it('/Commercial/Item/3533/GPR378P300/Body-Solid_300lb__Power_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3533/GPR378P300/Body-Solid_300lb__Power_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3533/gpr378p300/body-solid_300lb__power_rack_package/');
  })
  it('/commercial/item/3535/gdib46lp8/body-solid_powercenter_bench_package_p8', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3535/gdib46lp8/body-solid_powercenter_bench_package_p8/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3535/gdib46lp8/body-solid_powercenter_bench_package_p8/');
  })
  it('/commercial/item/3561/g9stkup/g9s_retro_upgrade', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3561/g9stkup/g9s_retro_upgrade/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3561/g9stkup/g9s_retro_upgrade/');
  })
  it('/commercial/item/3845/ob86pbs/body-solid_silver_u_s_a__olympic_bar', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/3845/ob86pbs/body-solid_silver_u_s_a__olympic_bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3845/ob86pbs/body-solid_silver_u_s_a__olympic_bar/');
  })
  it('/Commercial/Item/3846/OB86LPB/Body-Solid_Rebel_U_S_A__Olympic_Bar', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3846/OB86LPB/Body-Solid_Rebel_U_S_A__Olympic_Bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3846/ob86lpb/body-solid_rebel_u_s_a__olympic_bar/');
  })
  it('/Commercial/Item/3929/PFCBBCL/Body_Ball_Exercise_Laminated_Poster', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/3929/PFCBBCL/Body_Ball_Exercise_Laminated_Poster/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3929/pfcbbcl/body_ball_exercise_laminated_poster/');
  })
  it('/Commercial/Item/4071/P2LPX/Powerline_P2X_Home_Gym_with_Leg_Press', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4071/P2LPX/Powerline_P2X_Home_Gym_with_Leg_Press/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4071/p2lpx/powerline_p2x_home_gym_with_leg_press/');
  })
  it('/commercial/item/4227/gdkr50/body-solid_3_tier_kettlebell_rack', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4227/gdkr50/body-solid_3_tier_kettlebell_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4227/gdkr50/body-solid_3_tier_kettlebell_rack/');
  })
  it('/commercial/item/4299/dgym-frame/produal_dgym_modular_base_frame', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4299/dgym-frame/produal_dgym_modular_base_frame/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4299/dgym-frame/produal_dgym_modular_base_frame/');
  })
  it('/Commercial/Item/4307/PVKC83X/Powerline_PVKC83X_Vertical_Knee_Raise_Chin_Pull_Up', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4307/PVKC83X/Powerline_PVKC83X_Vertical_Knee_Raise_Chin_Pull_Up/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4307/pvkc83x/powerline_pvkc83x_vertical_knee_raise_chin_pull_up/');
  })
  it('/Commercial/Item/4309/GSTCK/Free_Standing_200lb__Selectorized_Weight_Stack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4309/GSTCK/Free_Standing_200lb__Selectorized_Weight_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4309/gstck/free_standing_200lb__selectorized_weight_stack/');
  })
  it('/Commercial/Item/4310/P2CLOTHSH/Cloth_Shroud_for_the_P2X', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4310/P2CLOTHSH/Cloth_Shroud_for_the_P2X/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4310/p2clothsh/cloth_shroud_for_the_p2x/');
  })
  it('/commercial/item/4311/smr1000/pro_club_power_rack/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4311/smr1000/pro_club_power_rack/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4311/smr1000/pro_club_power_rack/service=/');
  })
  it('/Commercial/Item/4317/GDIB46LP4/Body-Solid_PowerCenter_Bench_Package_P4', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4317/GDIB46LP4/Body-Solid_PowerCenter_Bench_Package_P4/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4317/gdib46lp4/body-solid_powercenter_bench_package_p4/');
  })
  it('/commercial/item/4320/bfsb5/best_fitness_sb5_indoor_bike', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4320/bfsb5/best_fitness_sb5_indoor_bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4320/bfsb5/best_fitness_sb5_indoor_bike/');
  })
  it('/commercial/item/4320/bfsb5/best_fitness_sb5_indoor_bike/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4320/bfsb5/best_fitness_sb5_indoor_bike/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4320/bfsb5/best_fitness_sb5_indoor_bike/adeasel.com');
  })
  it('/commercial/item/4393/sprplspr/spri_speed_jump_rope', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4393/sprplspr/spri_speed_jump_rope/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4393/sprplspr/spri_speed_jump_rope/');
  })
  it('/Commercial/Item/4430/KBC535SET/Premium_Kettlebells_with_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4430/KBC535SET/Premium_Kettlebells_with_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4430/kbc535set/premium_kettlebells_with_rack_package/');
  })
  it('/Commercial/Item/4431/KBC1070SET/Premium_Trainer_Kettlebell_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4431/KBC1070SET/Premium_Trainer_Kettlebell_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4431/kbc1070set/premium_trainer_kettlebell_package/');
  })
  it('/Commercial/Item/4436/RM95TI/Life_Fitness_95Ti_Treadmill/service', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4436/RM95TI/Life_Fitness_95Ti_Treadmill/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4436/rm95ti/life_fitness_95ti_treadmill/service=/');
  })
  it('/Commercial/Item/4443/GDR10/Body-Solid_GDR10_3_Pair_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4443/GDR10/Body-Solid_GDR10_3_Pair_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4443/gdr10/body-solid_gdr10_3_pair_dumbbell_rack/');
  })
  it('/commercial/item/4451/rmt850/true_850_ztx-p_treadmill', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4451/rmt850/true_850_ztx-p_treadmill/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4451/rmt850/true_850_ztx-p_treadmill/');
  })
  it('/commercial/item/4486/bfft10/best_fitness_functional_trainer/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4486/bfft10/best_fitness_functional_trainer/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4486/bfft10/best_fitness_functional_trainer/service=/');
  })
  it('/commercial/item/4491/sptxt685/spirit_xt685_treadmill/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4491/sptxt685/spirit_xt685_treadmill/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4491/sptxt685/spirit_xt685_treadmill/service=/adeasel.com');
  })
  it('/commercial/item/4497/l790clubet/landice_l7_treadmill_club_-_executive_panel/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4497/l790clubet/landice_l7_treadmill_club_-_executive_panel/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4497/l790clubet/landice_l7_treadmill_club_-_executive_panel/service=/');
  })
  it('/commercial/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4503/l790ltdpt/landice_l7_treadmill_ltd_-_pro_trainer_panel/service=/');
  })
  it('/commercial/item/4509/l890ltdpt/landice_l8_treadmill_ltd_-_pro_trainer_panel/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4509/l890ltdpt/landice_l8_treadmill_ltd_-_pro_trainer_panel/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4509/l890ltdpt/landice_l8_treadmill_ltd_-_pro_trainer_panel/service=/service=/');
  })
  it('/Commercial/Item/4510/L880LTDPST/Landice_LTD_L8_Pro_Sports_Trainer_Treadmill/service', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4510/L880LTDPST/Landice_LTD_L8_Pro_Sports_Trainer_Treadmill/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4510/l880ltdpst/landice_ltd_l8_pro_sports_trainer_treadmill/service=/');
  })
  it('/commercial/item/4512/l880ltdet/landice_ltd_l8_executive_trainer_treadmill/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4512/l880ltdet/landice_ltd_l8_executive_trainer_treadmill/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4512/l880ltdet/landice_ltd_l8_executive_trainer_treadmill/service=/adeasel.com');
  })
  it('/commercial/item/4528/le950prost/landice_e9_elliptimill_-_pro_sports_control_panel', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4528/le950prost/landice_e9_elliptimill_-_pro_sports_control_panel/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4528/le950prost/landice_e9_elliptimill_-_pro_sports_control_panel/');
  })
  it('/Commercial/Item/4530/LE950COMET/Landice_E9_ElliptiMill_-_Executive_Panel', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4530/LE950COMET/Landice_E9_ElliptiMill_-_Executive_Panel/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4530/le950comet/landice_e9_elliptimill_-_executive_panel/');
  })
  it('/Commercial/Item/4589/GDKR50P4/Body-Solid_3_Tier_Kettlebell_Rack_Package/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4589/GDKR50P4/Body-Solid_3_Tier_Kettlebell_Rack_Package/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/Item/4589/GDKR50P4/Body-Solid_3_Tier_Kettlebell_Rack_Package/adeasel.com');
  })
  it('/Commercial/Item/4612/CCOREANCHOR/Wall_Anchor_for_Straps___Bands', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4612/CCOREANCHOR/Wall_Anchor_for_Straps___Bands/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4612/ccoreanchor/wall_anchor_for_straps___bands/');
  })
  it('/Commercial/Item/4613/CCOREKRINGS/Accessory_Straps__Pair_', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4613/CCOREKRINGS/Accessory_Straps__Pair_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4613/ccorekrings/accessory_straps__pair_/');
  })
  it('/commercial/item/4678/obph/hi_temp_premium_bumper_plates', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4678/obph/hi_temp_premium_bumper_plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4678/obph/hi_temp_premium_bumper_plates/');
  })
  it('/Commercial/Item/4731/WFICOMP/Tsunami_Indoor_Cycle_Computer', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4731/WFICOMP/Tsunami_Indoor_Cycle_Computer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4731/wficomp/tsunami_indoor_cycle_computer/');
  })
  it('/Commercial/Item/4801/GPR378P8/Body-Solid_500lb__Power_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4801/GPR378P8/Body-Solid_500lb__Power_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4801/gpr378p8/body-solid_500lb__power_rack_package/');
  })
  it('/commercial/item/4807/com-room/commercial_gym_package/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4807/com-room/commercial_gym_package/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4807/com-room_gym_package/service=/service=/');
  })
  it('/commercial/item/4807/com-room/commercial_gym_package/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4807/com-room/commercial_gym_package/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4807/com-room_gym_package/service=/service=/adeasel.com');
  })
  it('/Commercial/Item/4809/RFSRPT/AKTIVLOK_Rubber_Puzzle_Mats', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4809/RFSRPT/AKTIVLOK_Rubber_Puzzle_Mats/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4809/rfsrpt/aktivlok_rubber_puzzle_mats/');
  })
  it('/Commercial/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Selectorized_Ab_Back_Machine', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4813/GCAB-STK/Body-Solid_GCAB-STK_Selectorized_Ab_Back_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4813/gcab-stk/body-solid_gcab-stk_selectorized_ab_back_machine/');
  })
  it('/commercial/item/4814/gcec-stk/body-solid_gcec-stk_leg_extension_curl_with_210lb__weight_stack/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4814/gcec-stk/body-solid_gcec-stk_leg_extension_curl_with_210lb__weight_stack/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4814/gcec-stk/body-solid_gcec-stk_leg_extension_curl_with_210lb__weight_stack/service=/');
  })
  it('/Commercial/Item/4815/GCBT-STK/Body-Solid_GCBT-STK_Selectorized_Bicep_Tricep', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/4815/GCBT-STK/Body-Solid_GCBT-STK_Selectorized_Bicep_Tricep/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/');
  })
  it('/commercial/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service=/');
  })
  it('/commercial/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/4815/gcbt-stk/body-solid_gcbt-stk_selectorized_bicep_tricep/service=/service=/adeasel.com');
  })
  it('/commercial/item/5269/osg-sets/olympic_deep_dish_weight_plate_sets_with_bar', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5269/osg-sets/olympic_deep_dish_weight_plate_sets_with_bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5269/osg-sets/olympic_deep_dish_weight_plate_sets_with_bar/');
  })
  it('/commercial/item/5277/s2slc/body-solid_proclub_series_2_leg_curl/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5277/s2slc/body-solid_proclub_series_2_leg_curl/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5277/s2slc/body-solid_proclub_series_2_leg_curl/service=/');
  })
  it('/commercial/item/5282/s2lat/body-solid_proclub_series_2_lat_seated_row/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5282/s2lat/body-solid_proclub_series_2_lat_seated_row/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5282/s2lat/body-solid_proclub_series_2_lat_seated_row/service=/adeasel.com');
  })
  it('/Commercial/Item/5285/S2AC/Pro_ClubLine_Series_2_S2AC_Arm_Curl', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5285/S2AC/Pro_ClubLine_Series_2_S2AC_Arm_Curl/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5285/s2ac/pro_clubline_series_2_s2ac_arm_curl/');
  })
  it('/commercial/item/5308/sgh500/body-solid_sgh500_glute_ham_machine', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5308/sgh500/body-solid_sgh500_glute_ham_machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5308/sgh500/body-solid_sgh500_glute_ham_machine/');
  })
  it('/Commercial/Item/5309/BFPR100/Best_Fitness_BFPR100_Power_Rack', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5309/BFPR100/Best_Fitness_BFPR100_Power_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5309/bfpr100/best_fitness_bfpr100_power_rack/');
  })
  it('/commercial/item/5331/kaxosr/kettler_axos_cycle_r/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5331/kaxosr/kettler_axos_cycle_r/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5331/kaxosr/kettler_axos_cycle_r/service=/service=/adeasel.com');
  })
  it('/commercial/item/5352/bstb5/body-solid_resistance_band_-_very_heavy', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5352/bstb5/body-solid_resistance_band_-_very_heavy/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5352/bstb5/body-solid_resistance_band_-_very_heavy/');
  })
  it('/Commercial/Item/5384/STIRRCX127/12__Rumble_Roller_High_Density', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5384/STIRRCX127/12__Rumble_Roller_High_Density/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5384/stirrcx127/12__rumble_roller_high_density/');
  })
  it('/Commercial/Item/5415/RCH-24000/Gym_Chalk_Cubes_Box_of_8', () => {
    cy.visit('https://fitnessfactory.com/Commercial/Item/5415/RCH-24000/Gym_Chalk_Cubes_Box_of_8/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5415/rch-24000/gym_chalk_cubes_box_of_8/');
  })
  it('/commercial/item/5442/phystp-life/hci_lifestep_recumbent_linear_cross_trainer', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5442/phystp-life/hci_lifestep_recumbent_linear_cross_trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5442/phystp-life/hci_lifestep_recumbent_linear_cross_trainer/');
  })
  it('/commercial/item/5444/ccore2mprack/crosscore_multi_purpose_half_rack/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5444/ccore2mprack/crosscore_multi_purpose_half_rack/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5444/ccore2mprack/crosscore_multi_purpose_half_rack/service=/service=/adeasel.com');
  })
  it('/commercial/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service=/service', () => {
    cy.visit('https://fitnessfactory.com/commercial/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/5479/true900t16t/true_excel_900_treadmill_-_transcend_16__console/service=/service=/');
  })
})
