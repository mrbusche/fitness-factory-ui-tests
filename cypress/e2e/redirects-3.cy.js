describe('Test redirects', () => {
  it('/Home/Item/19028/9a-395/Spirit_XE295_Elliptical_Floor_Model__Aurora', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/19028/9a-395/Spirit_XE295_Elliptical_Floor_Model__Aurora/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/19028/9a-395/spiritelliptical_floor_model__aurora/');
  })
  it('/Home/Item/19041/9a-bars/Scratch___Dents_Barbells___Only__25__Quantity_Limited', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/19041/9a-bars/Scratch___Dents_Barbells___Only__25__Quantity_Limited/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/19041/9a-bars/scratch___dents_barbells___only__25__quantity_limited/');
  })
  it('/Home/Item/2975/FID46/Body-Solid_Heavy_Duty_Leverage_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/2975/FID46/Body-Solid_Heavy_Duty_Leverage_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2975/fid46/body-solid_heavy_duty_leverage_bench/');
  })
  it('/home/Item/2976/NTS10/Nylon_Triceps_Strap', () => {
    cy.visit('https://fitnessfactory.com/home/Item/2976/NTS10/Nylon_Triceps_Strap/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2976/nts10/nylon_triceps_strap/');
  })
  it('/home/item/2999/gwt4/powerline_gwt4_weight_tree_attachment/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/2999/gwt4/powerline_gwt4_weight_tree_attachment/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/2999/gwt4/powerline_gwt4_weight_tree_attachment/adeasel.com');
  })
  it('/Home/Item/3005/OC06/Olympic_Spring_Collar', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3005/OC06/Olympic_Spring_Collar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3005/oc06/olympic_spring_collar/');
  })
  it('/home/item/3006/exm3000lps/body-solid_exm3000lps_double_stack_home_gym', () => {
    cy.visit('https://fitnessfactory.com/home/item/3006/exm3000lps/body-solid_exm3000lps_double_stack_home_gym/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3006/exm3000lps/body-solid_exm3000lps_double_stack_home_gym/');
  })
  it('/home/item/3008/exm4000s/body-solid_exm4000s_ultimate_triple_stack_gym/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/3008/exm4000s/body-solid_exm4000s_ultimate_triple_stack_gym/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3008/exm4000s/body-solid_exm4000s_ultimate_triple_stack_gym/service=/adeasel.com');
  })
  it('/Home/Item/3024/GOBH5/Vertical_Olympic_Barbell_Holder', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3024/GOBH5/Vertical_Olympic_Barbell_Holder/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3024/gobh5/vertical_olympic_barbell_holder/');
  })
  it('/Home/Item/3027/OPB/Cast_Iron_Olympic_Weights_2_5lb___5lb___10lb___25lb___35lb___45lb__and_100lb__plates', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3027/OPB/Cast_Iron_Olympic_Weights_2_5lb___5lb___10lb___25lb___35lb___45lb__and_100lb__plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3027/opb/cast_iron_olympic_weights_2_5lb___5lb___10lb___25lb___35lb___45lb__and_100lb__plates/');
  })
  it('/Home/Item/3027/OPB/Olympic_Iron_Weight_Plates_2-100_Pounds', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3027/OPB/Olympic_Iron_Weight_Plates_2-100_Pounds/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3027/opb/olympic_iron_weight_plates_2-100_pounds/');
  })
  it('/Home/Item/3029/OWT24/EZ-Load_Olympic_Weight_Plate_Tree', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3029/OWT24/EZ-Load_Olympic_Weight_Plate_Tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3029/owt24/ez-load_olympic_weight_plate_tree/');
  })
  it('/Home/Item/3047/RF36T/Body-Solid_Long_Treadmill_Floor_Mat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3047/RF36T/Body-Solid_Long_Treadmill_Floor_Mat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3047/rf36t/body-solid_long_treadmill_floor_mat/');
  })
  it('/Home/Item/3048/RF46/SuperMat_Rubber_Floor_Mat_3_8__Thick', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3048/RF46/SuperMat_Rubber_Floor_Mat_3_8__Thick/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3048/rf46/supermat_rubber_floor_mat_3_8__thick/');
  })
  it('/home/item/3050/sds/hex_iron_dumbbell_sets/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3050/sds/hex_iron_dumbbell_sets/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3050/sds/hex_iron_dumbbell_sets/service=/');
  })
  it('/home/item/3064/swt14/standard_weight_tree', () => {
    cy.visit('https://fitnessfactory.com/home/item/3064/swt14/standard_weight_tree/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3064/swt14/standard_weight_tree/');
  })
  it('/Home/Item/3064/SWT14/Weight_Tree_SWT14__Standard_Size_Plates', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3064/SWT14/Weight_Tree_SWT14__Standard_Size_Plates/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3064/swt14/weight_tree_swt14__standard_size_plates/');
  })
  it('/home/Item/3071/T3/Endurance_T3_Treadmill/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3071/T3/Endurance_T3_Treadmill/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3071/T3/Endurance_T3_Treadmill/adeasel.com');
  })
  it('/Home/Item/3081/BC2/Powerline_Power_Rack_Bar_Catches', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3081/BC2/Powerline_Power_Rack_Bar_Catches/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3081/bc2/powerline_power_rack_bar_catches/');
  })
  it('/Home/Item/3090/SP150/150lb__Selectorized_Weights', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3090/SP150/150lb__Selectorized_Weights/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3090/sp150/150lb__selectorized_weights/');
  })
  it('/Home/Item/3092/SP50/50lb__Selectorized_Weight_Stack_Upgrade', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3092/SP50/50lb__Selectorized_Weight_Stack_Upgrade/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3092/sp50/50lb__selectorized_weight_stack_upgrade/');
  })
  it('/home/item/3092/sp50/50lb__selectorized_weights', () => {
    cy.visit('https://fitnessfactory.com/home/item/3092/sp50/50lb__selectorized_weights/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3092/sp50/50lb__selectorized_weights/');
  })
  it('/home/item/3097/wlb47/linear_bushing_smith_attachment', () => {
    cy.visit('https://fitnessfactory.com/home/item/3097/wlb47/linear_bushing_smith_attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3097/wlb47/linear_bushing_smith_attachment/');
  })
  it('/home/item/3102/nvcl6/valeo_6_in__classic_competition_lifting_belts', () => {
    cy.visit('https://fitnessfactory.com/home/item/3102/nvcl6/valeo_6_in__classic_competition_lifting_belts/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3102/nvcl6/valeo_6_in__classic_competition_lifting_belts/');
  })
  it('/Home/Item/3105/ORT35/35lb__Black_Rubber_Grip_Plate', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3105/ORT35/35lb__Black_Rubber_Grip_Plate/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3105/ort35/35lb__black_rubber_grip_plate/');
  })
  it('/home/Item/3109/SDRS/Rubber_Coated_Dumbbell_Sets', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3109/SDRS/Rubber_Coated_Dumbbell_Sets/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3109/sdrs/rubber_coated_dumbbell_sets/');
  })
  it('/Home/Item/3109/SDRS/Rubber_Hex_Dumbbells__Sets_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3109/SDRS/Rubber_Hex_Dumbbells__Sets_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3109/sdrs/rubber_hex_dumbbells__sets_/');
  })
  it('/home/item/3135/gcca/body-solid_gcca_cable_column_attachment', () => {
    cy.visit('https://fitnessfactory.com/home/item/3135/gcca/body-solid_gcca_cable_column_attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3135/gcca/body-solid_gcca_cable_column_attachment/');
  })
  it('/Home/Item/3137/GPR378/Body-Solid_GPR378_Power_Rack_', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3137/GPR378/Body-Solid_GPR378_Power_Rack_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3137/gpr378/body-solid_gpr378_power_rack_/');
  })
  it('/Home/Item/3137/GPR378/Body-Solid_Power_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3137/GPR378/Body-Solid_Power_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3137/gpr378/body-solid_power_rack/');
  })
  it('/Home/Item/3137/GPR378/Body-Solid_Power_Rack_GPR378', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3137/GPR378/Body-Solid_Power_Rack_GPR378/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3137/gpr378/body-solid_power_rack_gpr378/');
  })
  it('/Home/Item/3138/GLA378/Body-Solid_GLA378_Lat_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3138/GLA378/Body-Solid_GLA378_Lat_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3138/gla378/body-solid_gla378_lat_attachment/');
  })
  it('/Home/Item/3138/GLA378/Body-Solid_Lat_Attachment_for_GPR378', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3138/GLA378/Body-Solid_Lat_Attachment_for_GPR378/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3138/gla378/body-solid_lat_attachment_for_gpr378/');
  })
  it('/Home/Item/3138/GLA378/Body-Solid_Power_Rack_Lat_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3138/GLA378/Body-Solid_Power_Rack_Lat_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3138/gla378/body-solid_power_rack_lat_attachment/');
  })
  it('/Home/Item/3140/GPR370/Body-Solid_GPR370_Olympic_Press_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3140/GPR370/Body-Solid_GPR370_Olympic_Press_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3140/gpr370/body-solid_gpr370_olympic_press_rack/');
  })
  it('/Home/Item/3140/GPR370/Body-Solid_Olympic_Press_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3140/GPR370/Body-Solid_Olympic_Press_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3140/gpr370/body-solid_olympic_press_rack/');
  })
  it('/home/item/3143/8gfb350/body-solid_gfb350_flat_bench-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3143/8gfb350/body-solid_gfb350_flat_bench-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3143/8gfb350/body-solid_gfb350_flat_bench-refurbished/');
  })
  it('/Home/Item/3147/8GPCA1/Body-Solid_Preacher_Curl_Attachment-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3147/8GPCA1/Body-Solid_Preacher_Curl_Attachment-Refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3147/8gpca1/body-solid_preacher_curl_attachment-refurbished/');
  })
  it('/home/Item/3150/GDIP59/Body-Solid_Dip_Station/â€‹http://www.bbb.org/chicago/business-reviews/exercise-equipment-and-machines-sales/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3150/GDIP59/Body-Solid_Dip_Station/â€‹http://www.bbb.org/chicago/business-reviews/exercise-equipment-and-machines-sales/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3150/GDIP59/Body-Solid_Dip_Station/â€‹http://www.bbb.org/chicago/business-reviews/exercise-equipment-and-machines-sales/adeasel.com');
  })
  it('/Home/Item/3152/8GPM65/Body-Solid_GPM65_Pec_Fly_Machine-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3152/8GPM65/Body-Solid_GPM65_Pec_Fly_Machine-Refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3152/8gpm65/body-solid_gpm65_pec_fly_machine-refurbished/');
  })
  it('/Home/Item/3152/GPM65/Body-Solid_Pec_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3152/GPM65/Body-Solid_Pec_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3152/gpm65/body-solid_pec_machine/');
  })
  it('/Home/Item/3153/8GPCB329/Body-Solid_Preacher_Curl_Bench-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3153/8GPCB329/Body-Solid_Preacher_Curl_Bench-Refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3153/8gpcb329/body-solid_preacher_curl_bench-refurbished/');
  })
  it('/home/item/3153/8gpcb329/body-solid_preacher_curl-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3153/8gpcb329/body-solid_preacher_curl-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3153/8gpcb329/body-solid_preacher_curl-refurbished/');
  })
  it('/Home/Item/3153/8GPCB329/Body-Solid_Preacher_Curl-Refurbished', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3153/8GPCB329/Body-Solid_Preacher_Curl-Refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3153/8gpcb329/body-solid_preacher_curl-refurbished/');
  })
  it('/home/item/3154/8gcbt380/body-solid_cam_bicep_tricep_machine-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3154/8gcbt380/body-solid_cam_bicep_tricep_machine-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3154/8gcbt380/body-solid_cam_bicep_tricep_machine-refurbished/');
  })
  it('/Home/Item/3154/GCBT380/Body-Solid_GCBT380_Bicep_Tricep_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3154/GCBT380/Body-Solid_GCBT380_Bicep_Tricep_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3154/gcbt380/body-solid_gcbt380_bicep_tricep_machine/');
  })
  it('/Home/Item/3161/GVKR82/Body-Solid_Vertical_Knee_Raise_Power_Tower', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3161/GVKR82/Body-Solid_Vertical_Knee_Raise_Power_Tower/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3161/gvkr82/body-solid_vertical_knee_raise_power_tower/');
  })
  it('/Home/Item/3163/GLPH1100/Body-Solid_GLPH1100_Leg_Press_Hack_Squat', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3163/GLPH1100/Body-Solid_GLPH1100_Leg_Press_Hack_Squat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3163/glph1100/body-solid_glph1100_leg_press_hack_squat/');
  })
  it('/home/Item/3163/GLPH1100/Body-Solid_Leg_Press_Hack_Squat', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3163/GLPH1100/Body-Solid_Leg_Press_Hack_Squat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3163/glph1100/body-solid_leg_press_hack_squat/');
  })
  it('/home/item/3163/glph1100/body-solid_leg_press_hack_squat', () => {
    cy.visit('https://fitnessfactory.com/home/item/3163/glph1100/body-solid_leg_press_hack_squat/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3163/glph1100/body-solid_leg_press_hack_squat/');
  })
  it('/home/item/3171/8glce365/body-solid_glce365_leg_extension_curl-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3171/8glce365/body-solid_glce365_leg_extension_curl-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3171/8glce365/body-solid_glce365_leg_extension_curl-refurbished/');
  })
  it('/home/item/3171/8glce365/body-solid_leg_extension_curl_machine-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3171/8glce365/body-solid_leg_extension_curl_machine-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3171/8glce365/body-solid_leg_extension_curl_machine-refurbished/');
  })
  it('/Home/Item/3172/GCEC340/Body-Solid_GCEC340_Leg_Extension_and_Curl_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3172/GCEC340/Body-Solid_GCEC340_Leg_Extension_and_Curl_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3172/gcec340/body-solid_gcec340_leg_extension_and_curl_machine/');
  })
  it('/home/Item/3174/GDR44/Body-Solid_Vertical_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3174/GDR44/Body-Solid_Vertical_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3174/gdr44/body-solid_vertical_dumbbell_rack/');
  })
  it('/Home/Item/3175/GDR363/Body-Solid_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3175/GDR363/Body-Solid_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3175/gdr363/body-solid_dumbbell_rack/');
  })
  it('/Home/Item/3175/GDR363/Body-Solid_GDR363_Dumbbell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3175/GDR363/Body-Solid_GDR363_Dumbbell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3175/gdr363/body-solid_gdr363_dumbbell_rack/');
  })
  it('/home/item/3179/8gowt/body-solid_gowt_olympic_weight_plate_tree-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3179/8gowt/body-solid_gowt_olympic_weight_plate_tree-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3179/8gowt/body-solid_gowt_olympic_weight_plate_tree-refurbished/');
  })
  it('/Home/Item/3190/SPRPLHGR/SPRI_Pro-Line_Black_Handgrip', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3190/SPRPLHGR/SPRI_Pro-Line_Black_Handgrip/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3190/sprplhgr/spri_pro-line_black_handgrip/');
  })
  it('/home/item/3204/sle200g/body-solid_proclub_leg_extension/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3204/sle200g/body-solid_proclub_leg_extension/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3204/sle200g/body-solid_proclub_leg_extension/service=/');
  })
  it('/Home/Item/3205/SLP500G/Body-Solid_ProClub_Leg_Press_Machine', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3205/SLP500G/Body-Solid_ProClub_Leg_Press_Machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3205/slp500g/body-solid_proclub_leg_press_machine/');
  })
  it('/home/item/3207/slm300g/pro_clubline_lat_mid_row', () => {
    cy.visit('https://fitnessfactory.com/home/item/3207/slm300g/pro_clubline_lat_mid_row/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3207/slm300g/pro_clubline_lat_mid_row/');
  })
  it('/Home/Item/3207/SLM300G/Pro_ClubLine_SLM300G_Lat_Mid_Row/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3207/SLM300G/Pro_ClubLine_SLM300G_Lat_Mid_Row/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3207/SLM300G/Pro_ClubLine_SLM300G_Lat_Mid_Row/adeasel.com');
  })
  it('/Home/Item/3219/GAB300/Body-Solid_Semi-Recumbent_Ab_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3219/GAB300/Body-Solid_Semi-Recumbent_Ab_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3219/gab300/body-solid_semi-recumbent_ab_bench/');
  })
  it('/home/item/3219/gab300/body-solid_semi-recumbent_ab_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/3219/gab300/body-solid_semi-recumbent_ab_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3219/gab300/body-solid_semi-recumbent_ab_bench/');
  })
  it('/home/item/3221/gdcc200/body-solid_functional_trainer/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3221/gdcc200/body-solid_functional_trainer/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3221/gdcc200/body-solid_functional_trainer/service=/service=/');
  })
  it('/home/item/3221/gdcc200/body-solid_functional_trainer/service=/service=/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/3221/gdcc200/body-solid_functional_trainer/service=/service=/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3221/gdcc200/body-solid_functional_trainer/service=/service=/adeasel.com');
  })
  it('/home/item/3222/8gdcc250/body-solid_cable_crossover-refurbished/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3222/8gdcc250/body-solid_cable_crossover-refurbished/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3222/8gdcc250/body-solid_cable_crossover-refurbished/service=/service=/');
  })
  it('/home/item/3225/dclp-/produal_dclp_leg_calf_press_machine/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3225/dclp-/produal_dclp_leg_calf_press_machine/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3225/dclp-/produal_dclp_leg_calf_press_machine/service=/service=/');
  })
  it('/home/item/3226/dlec-/produal_dlec_leg_extension_curl_machine/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3226/dlec-/produal_dlec_leg_extension_curl_machine/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3226/dlec-/produal_dlec_leg_extension_curl_machine/service=/service=/');
  })
  it('/home/item/3232/dpls-s/dpls_station_with_200lb__stack', () => {
    cy.visit('https://fitnessfactory.com/home/item/3232/dpls-s/dpls_station_with_200lb__stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3232/dpls-s/dpls_station_with_200lb__stack/');
  })
  it('/home/Item/3235/GLP-STK/Body-Solid_GLP-STK_Leg_Press_with_210lb__Weight_Stack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3235/GLP-STK/Body-Solid_GLP-STK_Leg_Press_with_210lb__Weight_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3235/glp-stk/body-solid_glp-stk_leg_press_with_210lb__weight_stack/');
  })
  it('/home/Item/3236/GIOT-STK/Body-Solid_GIOT-STK_Inner_Outer_Thigh_with_210lb__Weight_Stack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3236/GIOT-STK/Body-Solid_GIOT-STK_Inner_Outer_Thigh_with_210lb__Weight_Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3236/giot-stk/body-solid_giot-stk_inner_outer_thigh_with_210lb__weight_stack/');
  })
  it('/Home/Item/3236/GIOT-STK/Body-Solid_GIOT-STK_Selectorized_Inner_Outer_Thigh', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3236/GIOT-STK/Body-Solid_GIOT-STK_Selectorized_Inner_Outer_Thigh/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3236/giot-stk/body-solid_giot-stk_selectorized_inner_outer_thigh/');
  })
  it('/home/item/3237/b2r/endurance_b2r_recumbent_bike', () => {
    cy.visit('https://fitnessfactory.com/home/item/3237/b2r/endurance_b2r_recumbent_bike/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3237/b2r/endurance_b2r_recumbent_bike/');
  })
  it('/home/Item/3243/KB/Body-Solid_Iron_Kettlebells_5-100_lbs_', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3243/KB/Body-Solid_Iron_Kettlebells_5-100_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3243/kb/body-solid_iron_kettlebells_5-100_lbs_/');
  })
  it('/home/Item/3243/KB/Iron_Kettlebells_5-100_lbs_', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3243/KB/Iron_Kettlebells_5-100_lbs_/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3243/kb/iron_kettlebells_5-100_lbs_/');
  })
  it('/home/item/3254/kb75/75_lb__kettlebell', () => {
    cy.visit('https://fitnessfactory.com/home/item/3254/kb75/75_lb__kettlebell/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3254/kb75/75_lb__kettlebell/');
  })
  it('/home/item/3257/8bfsb10/best_fitness_sb10_indoor_training_cycle-refurbished', () => {
    cy.visit('https://fitnessfactory.com/home/item/3257/8bfsb10/best_fitness_sb10_indoor_training_cycle-refurbished/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3257/8bfsb10/best_fitness_sb10_indoor_training_cycle-refurbished/');
  })
  it('/Home/Item/3260/BFPR10r/Best_Fitness_Press_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3260/BFPR10r/Best_Fitness_Press_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3260/bfpr10r/best_fitness_press_rack/');
  })
  it('/Home/Item/3262/BFAB10r/Best_Fitness_BFAB10_Folding_Ab_Board', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3262/BFAB10r/Best_Fitness_BFAB10_Folding_Ab_Board/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3262/bfab10r/best_fitness_bfab10_folding_ab_board/');
  })
  it('/home/item/3268/plce165x/powerline_leg_curl_and_extension', () => {
    cy.visit('https://fitnessfactory.com/home/item/3268/plce165x/powerline_leg_curl_and_extension/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3268/plce165x/powerline_leg_curl_and_extension/');
  })
  it('/Home/Item/3270/PLA144X/Powerline_PLA144X_Lat_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3270/PLA144X/Powerline_PLA144X_Lat_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3270/pla144x/powerline_pla144x_lat_attachment/');
  })
  it('/Home/Item/3275/RB72/Body-Solid_6__Standard_Barbell', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3275/RB72/Body-Solid_6__Standard_Barbell/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3275/rb72/body-solid_6__standard_barbell/');
  })
  it('/home/item/3279/pab21x/powerline_pab21x_abdominal_trainer_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/3279/pab21x/powerline_pab21x_abdominal_trainer_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3279/pab21x/powerline_pab21x_abdominal_trainer_bench/');
  })
  it('/Home/item/3279/PAB21X/Powerline_Plate-Loaded_Ab_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/item/3279/PAB21X/Powerline_Plate-Loaded_Ab_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3279/pab21x/powerline_plate-loaded_ab_bench/');
  })
  it('/Home/Item/3284/PCCO90X/Powerline_Dual_Cable_Crossover', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3284/PCCO90X/Powerline_Dual_Cable_Crossover/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3284/pcco90x/powerline_dual_cable_crossover/');
  })
  it('/home/item/3286/8f600/2/body-solid_fusion_600_personal_trainer_210lb__stack-refurbished/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3286/8f600/2/body-solid_fusion_600_personal_trainer_210lb__stack-refurbished/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3286/8f600/2/body-solid_fusion_600_personal_trainer_210lb__stack-refurbished/service=/');
  })
  it('/home/item/3286/f600/2/fusion_600_personal_trainer_210lb_stack', () => {
    cy.visit('https://fitnessfactory.com/home/item/3286/f600/2/fusion_600_personal_trainer_210lb_stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3286/f600/2/fusion_600_personal_trainer_210lb_stack/');
  })
  it('/home/item/3287/bffid10r/best_fitness_folding_bench/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/home/item/3287/bffid10r/best_fitness_folding_bench/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3287/bffid10r/best_fitness_folding_bench/adeasel.com');
  })
  it('/Home/Item/3288/PSM144XS/Powerline_PSM144XS_Smith_Machine_Gym_Package', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3288/PSM144XS/Powerline_PSM144XS_Smith_Machine_Gym_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3288/psm144xs/powerline_psm144xs_smith_machine_gym_package/');
  })
  it('/home/item/3306/bsglpx/powerline_bsg_leg_press_attachment', () => {
    cy.visit('https://fitnessfactory.com/home/item/3306/bsglpx/powerline_bsg_leg_press_attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3306/bsglpx/powerline_bsg_leg_press_attachment/');
  })
  it('/Home/Item/3335/GFID225/Body-Solid_GFID225_Adjustable_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3335/GFID225/Body-Solid_GFID225_Adjustable_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3335/gfid225/body-solid_gfid225_adjustable_bench/');
  })
  it('/home/item/3336/bfob10r/best_fitness_bfob10_olympic_weight_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/3336/bfob10r/best_fitness_bfob10_olympic_weight_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3336/bfob10r/best_fitness_bfob10_olympic_weight_bench/');
  })
  it('/Home/Item/3337/8PHG1000X/Powerline_Plate-Load_Hardcore_Gym-Refurbished/adeasel.com', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3337/8PHG1000X/Powerline_Plate-Load_Hardcore_Gym-Refurbished/adeasel.com', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3337/8PHG1000X/Powerline_Plate-Load_Hardcore_Gym-Refurbished/adeasel.com');
  })
  it('/Home/Item/3337/PHG1000X/Plate_Load_Hardcore_Gym', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3337/PHG1000X/Plate_Load_Hardcore_Gym/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3337/phg1000x/plate_load_hardcore_gym/');
  })
  it('/home/item/3340/gdcc210/body-solid_compact_functional_trainer', () => {
    cy.visit('https://fitnessfactory.com/home/item/3340/gdcc210/body-solid_compact_functional_trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3340/gdcc210/body-solid_compact_functional_trainer/');
  })
  it('/home/item/3340/gdcc210/body-solid_gdcc210_compact_functional_trainer', () => {
    cy.visit('https://fitnessfactory.com/home/item/3340/gdcc210/body-solid_gdcc210_compact_functional_trainer/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3340/gdcc210/body-solid_gdcc210_compact_functional_trainer/');
  })
  it('/home/item/3341/spb368g/pro_clubline_olympic_shoulder_press_bench_by_body-solid', () => {
    cy.visit('https://fitnessfactory.com/home/item/3341/spb368g/pro_clubline_olympic_shoulder_press_bench_by_body-solid/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/home/Item/3342/SIB359G/Pro_ClubLine_SIB359G_Heavy_Duty_Incline_Bench', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3342/SIB359G/Pro_ClubLine_SIB359G_Heavy_Duty_Incline_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/Home/Item/3343/SDB351G/Body-Solid_ProClub_Decline_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3343/SDB351G/Body-Solid_ProClub_Decline_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/Home/Item/3343/SDB351G/Pro_ClubLine_SDB351G_Heavy_Duty_Decline_Bench', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3343/SDB351G/Pro_ClubLine_SDB351G_Heavy_Duty_Decline_Bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/home/item/3344/sfb349g/body-solid_proclub_flat_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/3344/sfb349g/body-solid_proclub_flat_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/home/item/3344/sfb349g/pro_clubline_flat_bench', () => {
    cy.visit('https://fitnessfactory.com/home/item/3344/sfb349g/pro_clubline_flat_bench/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/free-weights/weight-benches/');
  })
  it('/home/Item/3351/LVLC/Pro_ClubLine_LVLC_Leverage_Leg_Curl', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3351/LVLC/Pro_ClubLine_LVLC_Leverage_Leg_Curl/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3351/lvlc/pro_clubline_lvlc_leverage_leg_curl/');
  })
  it('/Home/Item/3355/FLP/Body-Solid_Fusion_Leg_Press_Attachment', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3355/FLP/Body-Solid_Fusion_Leg_Press_Attachment/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3355/flp/body-solid_fusion_leg_press_attachment/');
  })
  it('/home/item/3356/fcdwa/body-solid_fcdwa_weight_assist_dip___pull_up_station/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3356/fcdwa/body-solid_fcdwa_weight_assist_dip___pull_up_station/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3356/fcdwa/body-solid_fcdwa_weight_assist_dip___pull_up_station/service=/');
  })
  it('/Home/Item/3363/GDKR100/Body-Solid_GDKR100_Dumbbell_Kettlebell_Rack', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3363/GDKR100/Body-Solid_GDKR100_Dumbbell_Kettlebell_Rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3363/gdkr100/body-solid_gdkr100_dumbbell_kettlebell_rack/');
  })
  it('/home/Item/3381/F500/3/Fusion_500_Personal_Trainer_-_310lb__Stack', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3381/F500/3/Fusion_500_Personal_Trainer_-_310lb__Stack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3381/f500/3/fusion_500_personal_trainer_-_310lb__stack/');
  })
  it('/home/item/3381/f500-3/fusion_500_personal_trainer_-_310lb__stack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3381/f500-3/fusion_500_personal_trainer_-_310lb__stack/service=/service=', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3381/f500-3/fusion_500_personal_trainer_-_310lb__stack/service=/service=/');
  })
  it('/home/item/3384/dpls-/produal_dpls_press_arm_machine', () => {
    cy.visit('https://fitnessfactory.com/home/item/3384/dpls-/produal_dpls_press_arm_machine/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3384/dpls-/produal_dpls_press_arm_machine/');
  })
  it('/home/item/3398/bst1/body-solid_t-shirt', () => {
    cy.visit('https://fitnessfactory.com/home/item/3398/bst1/body-solid_t-shirt/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3398/bst1/body-solid_t-shirt/');
  })
  it('/home/item/3413/gdccrack/gdcc_accessory_rack', () => {
    cy.visit('https://fitnessfactory.com/home/item/3413/gdccrack/gdcc_accessory_rack/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3413/gdccrack/gdcc_accessory_rack/');
  })
  it('/home/Item/3416/BFINVER10r/Best_Fitness_BFINVER10_Inversion_Table', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3416/BFINVER10r/Best_Fitness_BFINVER10_Inversion_Table/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3416/bfinver10r/best_fitness_bfinver10_inversion_table/');
  })
  it('/home/item/3444/govts3/go__vitality_training_series_3_dvd_set', () => {
    cy.visit('https://fitnessfactory.com/home/item/3444/govts3/go__vitality_training_series_3_dvd_set/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3444/govts3/go__vitality_training_series_3_dvd_set/');
  })
  it('/Home/Item/3445/BFMG20/Best_Fitness_BFMG20_Sportsman_Gym/service', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3445/BFMG20/Best_Fitness_BFMG20_Sportsman_Gym/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3445/bfmg20/best_fitness_bfmg20_sportsman_gym/service=/');
  })
  it('/home/Item/3445/BFMG20/Best_Fitness_Sportsman_Gym_20', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3445/BFMG20/Best_Fitness_Sportsman_Gym_20/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3445/bfmg20/best_fitness_sportsman_gym_20/');
  })
  it('/Home/Item/3446/FCD-STK/Body-Solid_FCD-STK_Weight_Assist_Dip_Pull_Up', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3446/FCD-STK/Body-Solid_FCD-STK_Weight_Assist_Dip_Pull_Up/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3446/fcd-stk/body-solid_fcd-stk_weight_assist_dip_pull_up/');
  })
  it('/Home/Item/3449/BFVK10/Best_Fitness_Vertical_Knee_Raise_Chin_Pull_Up', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3449/BFVK10/Best_Fitness_Vertical_Knee_Raise_Chin_Pull_Up/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3449/bfvk10/best_fitness_vertical_knee_raise_chin_pull_up/');
  })
  it('/home/item/3450/p2x/p2x_home_gym', () => {
    cy.visit('https://fitnessfactory.com/home/item/3450/p2x/p2x_home_gym', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3450/p2x/p2x_home_gym/');
  })
  it('/home/item/3485/polt31c/polar__t31_coded_transmitter', () => {
    cy.visit('https://fitnessfactory.com/home/item/3485/polt31c/polar__t31_coded_transmitter/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3485/polt31c/polar__t31_coded_transmitter/');
  })
  it('/home/item/3487/pols1/polar_s1_footpod', () => {
    cy.visit('https://fitnessfactory.com/home/item/3487/pols1/polar_s1_footpod/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3487/pols1/polar_s1_footpod/');
  })
  it('/Home/Item/3504/BSTSB/Body-Solid_Exercise_Stability_Balls', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3504/BSTSB/Body-Solid_Exercise_Stability_Balls/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3504/bstsb/body-solid_exercise_stability_balls/');
  })
  it('/Home/Item/3525/PUB30/Easy_Mount_Door_Frame_Pull_Up_Bar', () => {
    cy.visit('https://fitnessfactory.com/Home/Item/3525/PUB30/Easy_Mount_Door_Frame_Pull_Up_Bar/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3525/pub30/easy_mount_door_frame_pull_up_bar/');
  })
  it('/home/Item/3528/KB535SET/Kettlebells_with_Rack_Package', () => {
    cy.visit('https://fitnessfactory.com/home/Item/3528/KB535SET/Kettlebells_with_Rack_Package/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3528/kb535set/kettlebells_with_rack_package/');
  })
  it('/home/item/3529/kb1070set/5-35lb__double_kettlebell_set_with_rack/service=/service', () => {
    cy.visit('https://fitnessfactory.com/home/item/3529/kb1070set/5-35lb__double_kettlebell_set_with_rack/service=/service=/', { failOnStatusCode: false });
    cy.url().should('eq', 'https://www.fitnessfactory.com/item/3529/kb1070set/5-35lb__double_kettlebell_set_with_rack/service=/service=/');
  })
})
