package com.wqslab.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wqslab.patrimonio.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
