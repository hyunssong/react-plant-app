package com.react.tree.reacttreeapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.react.tree.reacttreeapp.entity.Plant;


@Repository
public interface PlantRepository  extends JpaRepository <Plant, Long>{

}
