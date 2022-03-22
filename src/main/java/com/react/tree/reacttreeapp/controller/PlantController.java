package com.react.tree.reacttreeapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.react.tree.reacttreeapp.entity.Plant;
import com.react.tree.reacttreeapp.repository.PlantRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*") 
public class PlantController {
	
	@Autowired
	private PlantRepository plantRepository;
	
	//get all plant data
	@GetMapping("/list")
	public List<Plant> getAllPlants(){
		return plantRepository.findAll();
	}
}
